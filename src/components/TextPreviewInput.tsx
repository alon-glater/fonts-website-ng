import React, { ChangeEvent } from "react";
import { TextInput } from "@mantine/core";

interface TextPreviewInputProps {
  onChange: (text: string) => void;
}

export const TextPreviewInput = ({ onChange }: TextPreviewInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value);

  return (
    <TextInput
      placeholder="מה תרצו לכתוב היום?"
      onChange={handleChange}
      variant="filled"
      radius={2}
      size="xl"
    />
  );
};
