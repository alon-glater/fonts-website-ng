import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

interface SearchboxProps {
  onSearch: (query: string) => void;
}

export const Searchbox = ({ onSearch }: SearchboxProps) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  return (
    <InputGroup>
      <FormControl
        placeholder="חפש פונטים..."
        value={query}
        onChange={handleQueryChange}
      />
    </InputGroup>
  );
};
