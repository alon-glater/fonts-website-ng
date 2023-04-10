import React, { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

interface TextPreviewInputProps {
  onChange: (text: string) => void;
}

export const TextPreviewInput = ({ onChange }: TextPreviewInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

  return (
    <Form>
      <Form.Control type="text" placeholder="הכנס טקסט כדי לראות תצוגה מקדימה" onChange={handleChange} />
    </Form>
  )
};