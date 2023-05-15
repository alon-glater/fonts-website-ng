import React, { useState, useRef, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import { clsx, createStyles, Divider, Flex } from "@mantine/core";
import compact from "lodash.compact";
import { TextPreviewInput } from "./TextPreviewInput";
import { FontDisplay } from "./FontDisplay";
import { listFonts } from "../graphql/queries";
import type { Fontlike } from "../types";
import type { ListFontsQuery } from "../API";
import { Font } from "../Font";

const DEFAULT_PAGE_SIZE = 0;
const FONT_DISPLAY_HEIGHT = 144;

const SpacedDivider: React.FC = () => <Divider my="lg" />;

const useStyles = createStyles({
  fullHeight: {
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
  const fontsListContainerRef = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [fonts, setFonts] = useState<Fontlike[]>([]);

  useEffect(() => {
    const fontsListHeight = fontsListContainerRef.current?.clientHeight;

    if (fontsListHeight) {
      const pageSize = Math.floor(fontsListHeight / FONT_DISPLAY_HEIGHT);

      setPageSize(pageSize);
    }
  }, [fontsListContainerRef.current?.clientHeight]);

  useEffect(() => {
    API.graphql<GraphQLQuery<ListFontsQuery>>(graphqlOperation(listFonts)).then(
      (response) => {
        console.log(JSON.stringify(response));
        const fetchedFonts = response.data?.listFonts?.items;
        if (fetchedFonts?.length) {
          setFonts(
            compact(fetchedFonts).map(
              ({ name, displayName, url, format }) =>
                new Font(name, displayName, url, format)
            )
          );
        }
      }
    );
  }, [pageSize, pageIndex]);

  return (
    <Flex
      direction="column"
      gap="xl"
      className={clsx("FontsList", classes.fullHeight)}
    >
      <TextPreviewInput onChange={setDisplayedText} />

      <div
        className={classes.fontsDisplayContainer}
        ref={fontsListContainerRef}
      >
        {fonts.map((font, index, array) => (
          <div key={font.name}>
            {index === 0 && <SpacedDivider />}
            <FontDisplay
              text={displayedText}
              fontName={font.name}
              displayName={font.displayName}
              fontUrl={font.url}
              fileName="Placeholder"
              onDownload={() => undefined}
              onDeletion={() => undefined}
            />
            {index < array.length - 1 && <SpacedDivider />}
          </div>
        ))}
      </div>

      <div className={classes.flexCentered}>
        <>
          <button>הקודם</button>
          <button>הבא</button>
        </>
      </div>
    </Flex>
  );
}
