import { useRouter } from "next/router";
import React, { useCallback, useMemo, useState } from "react";
import { Descendant, Editor, createEditor } from "slate";
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from "slate-react";

interface RichTextEditorProps {
  defaultValue?: Descendant[];
  onChange?: (value: Descendant[]) => void;
  renderBlock: (props: RenderElementProps) => JSX.Element;
  renderHighlight?: (props: RenderLeafProps) => JSX.Element;
  renderElement?: (props: RenderElementProps) => JSX.Element;
}

type RichTextEditor = Editor & {
  insertData: (data: DataTransfer) => void;
  isVoid: (element: Element) => boolean;
};

type RichTextEditorWithReact = RichTextEditor & ReactEditor;

const RichText: React.FC<RichTextEditorProps> = ({
  defaultValue = [],
  onChange,
  renderBlock,
  renderElement,
  renderHighlight,
}) => {
  const isAuthenticated = true; // inserire codice per verificare l'autenticazione
  const isAdminRoute =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/admin"); // sostituire '/admin' con il percorso corretto

  const editor = useMemo(
    () => withReact(createEditor()),
    []
  ) as RichTextEditorWithReact;
  const [value, setValue] = useState(defaultValue);

  const handleChange = useCallback(
    (newValue: Descendant[]) => {
      setValue(newValue);
      onChange?.(newValue);
    },
    [onChange]
  );

  const renderCustomElement = useCallback(
    (props: RenderElementProps) => {
      return renderElement ? renderElement(props) : renderBlock(props);
    },
    [renderElement, renderBlock]
  );

  const renderCustomLeaf = useCallback(
    (props: RenderLeafProps) => {
      if (renderHighlight && props.leaf) {
        return renderHighlight(props);
      }
      return <span {...props.attributes}>{props.children}</span>;
    },
    [renderHighlight]
  );

  const isEditable = isAuthenticated && isAdminRoute;

  return (
    <div>
      <Slate editor={editor} value={value} onChange={handleChange}>
        <Editable
          autoFocus={false}
          spellCheck={false}
          readOnly={!isEditable}
          renderLeaf={renderCustomLeaf}
          suppressHydrationWarning={true}
          renderElement={renderCustomElement}
        />
      </Slate>
    </div>
  );
};

export { RichText };
