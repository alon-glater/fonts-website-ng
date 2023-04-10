import React from "react";
import { Nav } from "react-bootstrap";
import { FontCategory, categoryHebrewNames } from "../font-categories";

interface CategoriesProps {
  categories: FontCategory[];
  selectedCategory: FontCategory;
  onCategoryChange: (category: FontCategory) => void;
}

export const Categories = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoriesProps) => (
  <Nav className="justify-content-center" activeKey={selectedCategory} justify>
    {categories.map((category) => (
      <Nav.Item key={category}>
        <Nav.Link
          onClick={() => onCategoryChange(category)}
          eventKey={category}
        >
          {categoryHebrewNames.get(category)}
        </Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);
