import React, { ChangeEvent, FC, RefObject } from "react";
import Image from "next/image";

type ImageUploaderProps = {
  imageUrl: string | null;
  inputRef: RefObject<HTMLInputElement>;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  width: number;
  height: number;
};

const ImageUploader: FC<ImageUploaderProps> = ({
  imageUrl,
  inputRef,
  width,
  height,
  onInputChange,
  onClick,
}) => {
  const defaultImageSrc = "https://dummyimage.com/720x600";

  return (
    <div className="mt-4">
      <Image
        className="object-cover object-center rounded cursor-pointer"
        alt="hero"
        width={width}
        height={height}
        src={imageUrl || defaultImageSrc}
        onClick={onClick}
      />
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={onInputChange}
      />
    </div>
  );
};

export default ImageUploader;
