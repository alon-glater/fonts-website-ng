import React, { useState } from "react";
import type { Fontlike } from "../types";
import { FontCategory } from "../font-categories";
import { TextPreviewInput } from "./TextPreviewInput";
import { FontDisplay } from "./FontDisplay";
import { FontsList } from "./FontsList";
import { Container } from "@mantine/core";

interface HomeProps {
  fonts: Fontlike[];
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
  const [pageIndex, setPageIndex] = useState<number>(0);

  return <FontsList />;
};

const range = (start: number, end: number) => {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
};
