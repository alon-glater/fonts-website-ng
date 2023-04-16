import React, { useState } from "react";
import type { Font } from "../types";
import { FontCategory } from "../font-categories";
import { TextPreviewInput } from "./TextPreviewInput";
import { Categories } from "./Categories";
import { FontDisplay } from "./FontDisplay";
import { Container } from "@mantine/core";

interface HomeProps {
  fonts: Font[];
  totalFontsAmount: number;
  fontsPerPageAmount: number;
  currentPage: number;
  selectedCategory: FontCategory;
  onCategoryChange: (category: FontCategory) => void;
  onPageChange: (index: number) => void;
  onFontDownload: (fontName: string) => void;
  onFontDeletion: (fontName: string) => void;
}

export const Main = ({
  fonts,
  totalFontsAmount,
  fontsPerPageAmount,
  selectedCategory,
  currentPage,
  onCategoryChange,
  onPageChange,
  onFontDownload,
  onFontDeletion,
}: HomeProps) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  return (
    <>
      <Container>
        {fonts.map((font) => (
          <FontDisplay
            key={font.name}
            text="Placeholder"
            fontName={font.name}
            displayName={font.displayName}
            fontUrl={font.url}
            fileName="Placeholder"
            onDownload={() => undefined}
            onDeletion={() => undefined}
          />
        ))}
      </Container>
    </>
  );
};

const range = (start: number, end: number) => {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
};
