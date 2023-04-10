import React, { useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import type { Font } from "../types";
import { FontCategory } from "../font-categories";
import { TextPreviewInput } from "./TextPreviewInput";
import { Categories } from "./Categories";
import { FontDisplay } from "./FontDisplay";

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
        <Row>
          <Col>
            <Categories
              categories={Object.values(FontCategory)}
              selectedCategory={selectedCategory}
              onCategoryChange={onCategoryChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextPreviewInput
              onChange={(text: string) => setDisplayedText(text)}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            {fonts &&
              fonts.map(({ name, displayName, format, url }) => (
                <FontDisplay
                  key={name}
                  text={displayedText}
                  fontName={name}
                  displayName={displayName}
                  fileName={name + "." + format.split("/")[1]}
                  fontUrl={url}
                  onDownload={onFontDownload}
                  onDeletion={onFontDeletion}
                />
              ))}
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-center">
          <Col xs="auto">
            <Pagination style={{ direction: "ltr" }}>
              {range(1, Math.ceil(totalFontsAmount / fontsPerPageAmount)).map(
                (index) => (
                  <Pagination.Item
                    key={index}
                    active={index === currentPage}
                    onClick={() => onPageChange(index)}
                  >
                    {index}
                  </Pagination.Item>
                )
              )}
            </Pagination>
          </Col>
        </Row>
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
