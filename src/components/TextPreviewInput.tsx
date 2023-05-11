import React, { ChangeEvent } from "react";

interface TextPreviewInputProps {
  onChange: (text: string) => void;
}

export const TextPreviewInput = ({ onChange }: TextPreviewInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value);

  return (
    <input
      type="text"
      placeholder="הכנס טקסט כדי לראות תצוגה מקדימה"
      onChange={handleChange}
    />
  );
};
