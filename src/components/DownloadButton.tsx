import { Button } from "@mantine/core";
import React from "react";
import { FaDownload } from "react-icons/fa";

type DownloadButtonProps = {
  filename: string;
  src: string;
  format?: string;
};

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  filename,
  format = "woff",
  src,
}) => {
  function downloadFont() {
    downloadFile(src, filename, format);
  }

  return (
    <Button size="xl" p={19} loading={!src} onClick={downloadFont}>
      <FaDownload />
    </Button>
  );
};

function downloadFile(src: string, filename: string, format: string) {
  const link = document.createElement("a");
  link.href = src;
  link.download = `${filename}.${format}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
