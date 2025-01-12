import Image from "next/image";

interface ComponentSharedMediaProps {
    file: {
      documentId: string;
      name: string;
      url: string;
    };
}

const ComponentSharedMedia = ({ file }: ComponentSharedMediaProps) => {
    console.log(file);
    return (
        <Image
          src={ getFullUrl(file.url) }
          alt={ file.name || "Media File" }
          width={ 200 }
          height={ 200 }
          priority
        />
    );
  };
  
  export default ComponentSharedMedia;
  
  // Helper function
  const getFullUrl = (url: string) =>
    `${process.env.NEXT_PUBLIC_STRAPI_URL || ""}${url}`;
  