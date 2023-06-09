import { FC, ChangeEvent, RefObject, useEffect, useState } from "react";
import Image from "next/image";
import {
  setStorageData,
  getStorageData,
  useIsEditable,
} from "@/firebase/firebase.config";

type SafeNumber = number | `${number}`;
type ImageUploaderProps = {
  alt: string;
  inputRef: RefObject<HTMLInputElement>;
  imageKey?: string;
  fallbackImage?: string;
  className?: string;
  width?: SafeNumber | undefined;
  height?: SafeNumber | undefined;
};

const ImageUploader: FC<ImageUploaderProps> = ({
  inputRef,
  alt,
  imageKey,
  className,
  width,
  height,
  fallbackImage,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isEditable = useIsEditable();

  const handleImageClick = () => {
    if (isEditable && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);

      try {
        const success = await setStorageData(`images/${imageKey}`, file);
        if (success) {
          setImageUrl(URL.createObjectURL(file));
        } else {
          console.error("Errore durante il caricamento dell'immagine");
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Errore durante il caricamento dell'immagine:", error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const downloadURL = await getStorageData(`images/${imageKey}`);
        setImageUrl(downloadURL);
      } catch (error) {
        console.error(
          "Errore durante il recupero dell'URL dell'immagine:",
          error
        );
        setImageUrl(fallbackImage || null);
      }
    };

    fetchImageUrl();
  }, [imageKey, fallbackImage]);

  const handleImageReplace = () => {
    if (isEditable && inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="mt-4">
      <div
        style={{ position: "relative" }}
        // className={"min-h-[25rem] min-w-full"}
      >
        {imageUrl ? (
          <>
            <img
              className={className}
              src={imageUrl}
              alt={alt}
              sizes="800"
              width={width}
              height={height}
            />
            {isEditable && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={handleImageReplace}
              ></div>
            )}
          </>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ddd",
              cursor: "pointer",
            }}
            onClick={handleImageClick}
          >
            Carica un&#39;immagine
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleInputChange}
      />
      {isLoading && <span>Caricamento in corso...</span>}
    </div>
  );
};

export default ImageUploader;
