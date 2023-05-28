import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FC, RefObject, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase/firebase.config";

type ImageUploaderProps = {
  inputRef: RefObject<HTMLInputElement> | null;
  width: number;
  height: number;
  onInputChange: (event: ChangeEvent<HTMLInputElement>, key: string) => void;
  onClick: (event: ChangeEvent<HTMLInputElement>, key: string) => void;
};

const ImageUploader: FC<ImageUploaderProps> = ({
  inputRef,
  width,
  height,
  onInputChange,
  onClick,
}) => {
  const router = useRouter();
  const isAdminRoute =
    typeof window !== "undefined" && router.pathname.startsWith("/admin");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    if (isAdminRoute) {
      if (inputRef && inputRef.current && inputRef.current.click) {
        inputRef.current.click();
      }
    } else {
      return;
    }
  };

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);

      try {
        const storage = getStorage(initializeApp(firebaseConfig)); // Inizializza Firebase storage
        const storageRef = ref(storage, "images/" + file.name);
        await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(storageRef);
        setIsLoading(false);
        setImageUrl(downloadURL);
      } catch (error) {
        console.error("Error uploading image:", error);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="mt-4">
      <div style={{ position: "relative", width, height }}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Immagine caricata"
            layout="fill"
            objectFit="cover"
          />
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
            onClick={handleClick}
          >
            Carica un'immagine
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
      {isLoading && <div>Caricamento...</div>}
    </div>
  );
};

export default ImageUploader;
