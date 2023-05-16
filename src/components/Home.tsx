import React, { useState } from "react";
import type { Fontlike } from "../types";
import { FontCategory } from "../font-categories";
import { FontsList } from "./FontsList";
import { Banner } from "./Banner";

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

  return (
    <>
      <Banner />
      <br />
      <FontsList />
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
