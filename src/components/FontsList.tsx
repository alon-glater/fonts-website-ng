import React, { useState } from "react";
import { clsx, createStyles } from "@mantine/core";
import { TextPreviewInput } from "./TextPreviewInput";

const DEFAULT_PAGE_SIZE = 0;

const useStyles = createStyles({
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  flexCentered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
  },
  fontsDisplayContainer: {
    flexGrow: 1,
  },
});

export function FontsList() {
  const { classes } = useStyles();
  const [displayedText, setDisplayedText] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  return (
    <div className={clsx("FontsList", classes.flexColumn)}>
      <TextPreviewInput onChange={setDisplayedText} />

      <div className={classes.fontsDisplayContainer}></div>
      {/* {fonts.map((font) => (
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
))} */}

      <div className={classes.flexCentered}>
        <>
          <button>הקודם</button>
          <button>הבא</button>
        </>
      </div>
    </div>
  );
}
