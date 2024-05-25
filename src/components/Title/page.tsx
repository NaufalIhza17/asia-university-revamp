import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
}

export const generateMetadata = ({
  title,
  description,
}: MetadataProps): Metadata => {
  return {
    title: title ? `${title} | Asia University` : "Asia University",
    description: description ?? "Default description",
  };
};
