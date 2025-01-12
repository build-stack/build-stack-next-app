import Image from "next/image";

interface ComponentSharedMediaProps {
    file: {
      documentId: string;
      name: string;
      url: string;
    };
}

const ComponentSharedMedia = ({ file }: ComponentSharedMediaProps) => {
    return (
        <Image
          src={ file.url }
          alt={ file.name || "Media File" }
          width={ 200 }
          height={ 200 }
          priority
        />
    );
  };
  
  export default ComponentSharedMedia;