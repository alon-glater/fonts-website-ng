export enum FontCategory {
  ALL = "all",
  OLD = "old",
  SEGMENTED = "segmented",
  STRAIGHT = "straight",
  CURVY = "curvy",
  PRINTED = "printed",
  HANDWRITTEN = "handwritten",
}

export const categoryHebrewNames = new Map<FontCategory, string>([
  [FontCategory.ALL, "הכל"],
  [FontCategory.OLD, "ישן"],
  [FontCategory.SEGMENTED, "מקוטע"],
  [FontCategory.STRAIGHT, "ישר"],
  [FontCategory.CURVY, "מעוגל"],
  [FontCategory.PRINTED, "כתב א"],
  [FontCategory.HANDWRITTEN, "כתב ב"],
]);
