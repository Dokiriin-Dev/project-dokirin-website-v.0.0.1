import { useIsEditable } from "@/firebase/firebase.config";
import { useEffect, useRef, useState } from "react";
import {
  Descendant,
  Editor,
  Element as SlateElement,
  Transforms,
  createEditor,
} from "slate";
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from "slate-react";

interface RichTextEditorProps {
  value?: Descendant[] | (() => Descendant[]);
  onChange?: (value: Descendant[]) => void;
  renderBlock: (props: RenderElementProps) => JSX.Element;
  renderHighlight?: (props: RenderLeafProps) => JSX.Element;
  renderElement?: (props: RenderElementProps) => JSX.Element;
  className?: string;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  renderToolbar?: () => JSX.Element;
  placeholder: string;
  maxLength?: number;
  allowedFormats?: string[];
  customCommands?: Record<string, () => void>;
  validate?: (value: Descendant[]) => boolean;
}

type CustomElement = Omit<SlateElement, "type"> & {
  type: string;
};

type RichTextEditor = Editor & {
  insertData: (data: DataTransfer) => void;
  isVoid: (element: CustomElement) => boolean;
};

type RichTextEditorWithReact = RichTextEditor & ReactEditor;

const RichText: React.FC<RichTextEditorProps> = ({
  value = [],
  onChange,
  renderBlock,
  renderElement,
  renderHighlight,
  className,
  onKeyDown,
  onFocus,
  onBlur,
  renderToolbar,
  placeholder = "Inserisci il testo...",
  maxLength,
  allowedFormats,
  customCommands,
  validate,
}) => {
  const editorRef = useRef<RichTextEditorWithReact | null>(null);
  const [editor] = useState(() => withReact(createEditor()));

  const isEditable = useIsEditable(); // Ottieni il valore di isEditable

  const getInitialValue = (): Descendant[] => {
    if (typeof value === "function") {
      return value();
    }
    return value;
  };

  const [editorValue, setEditorValue] = useState<Descendant[]>(
    getInitialValue()
  );

  useEffect(() => {
    if (editorRef.current) {
      const editor = editorRef.current;
      return () => {
        if (validate) {
          const isValid = validate(editor.children);
          // Perform actions based on the validity of the content...
        }
      };
    }
  }, [validate]);

  const handleChange = (newValue: Descendant[]) => {
    setEditorValue(newValue);
    onChange?.(newValue);
  };

  const renderCustomElement = (props: RenderElementProps) => {
    return renderElement ? renderElement(props) : renderBlock(props);
  };

  const renderCustomLeaf = (props: RenderLeafProps) => {
    if (renderHighlight && props.leaf) {
      return renderHighlight(props);
    }
    return <span {...props.attributes}>{props.children}</span>;
  };

  const handleCustomCommand = (command: string) => {
    if (customCommands && customCommands[command]) {
      customCommands[command]();
    }
  };

  return (
    <div className={className}>
      {renderToolbar && renderToolbar()}
      <Slate editor={editor} initialValue={editorValue} onChange={handleChange}>
        <Editable
          spellCheck={false}
          readOnly={!isEditable}
          onFocus={onFocus}
          onBlur={onBlur}
          suppressContentEditableWarning={true}
          renderLeaf={renderCustomLeaf}
          renderElement={renderCustomElement}
          placeholder={isEditable ? placeholder : ""}
          maxLength={maxLength}
          onKeyDown={(event) => {
            if (maxLength && event.target instanceof HTMLDivElement) {
              const textLength = event.target.innerText.length;
              if (textLength >= maxLength) {
                event.preventDefault();
                event.stopPropagation();
                return;
              }
            }

            if (event.key === "Enter" && event.shiftKey) {
              event.preventDefault();
              Transforms.insertText(editor, "\n");
            }

            if (customCommands && event.key === "Tab") {
              event.preventDefault();
              handleCustomCommand("tab");
            }

            onKeyDown?.(event);
          }}
        />
      </Slate>
    </div>
  );
};

export default RichText;
