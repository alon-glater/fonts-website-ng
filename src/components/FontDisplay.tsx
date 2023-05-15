import React, { useEffect, useState } from "react";
import {
  Grid,
  Title,
  Text,
  Divider,
  Slider,
  createStyles,
  useMantineTheme,
  Button,
  Flex,
} from "@mantine/core";
import { FaDownload } from "react-icons/fa";

const PLACEHOLDER_TEXT = "אבגדהוזחטיכלמנסעפצקרשת0123456";
const FONT_SIZE = "גודל";
const LETTER_SPACING = "מרווח תווים";
const MIN_FONT_SIZE = 8;
const MAX_FONT_SIZE = 96;
const MAX_LETTER_SPACING = 5;

type FontDisplayParameters = {
  fontName: string;
  fontSize: number;
  letterSpacing: number;
};

const useStyles = createStyles(
  (_, { fontName, fontSize, letterSpacing }: FontDisplayParameters) => ({
    fontDisplay: {
      fontFamily: fontName,
      fontSize: fontSize,
      letterSpacing: letterSpacing,
      wordBreak: "break-all",
    },
    autoSized: {
      flexGrow: 1,
    },
  })
);

interface FontDisplayProps {
  text: string;
  fontName: string;
  displayName: string;
  fileName: string;
  fontUrl: string;
  onDownload: (fontName: string) => void;
  onDeletion: (fontName: string) => void;
}

export const FontDisplay = ({
  text,
  fontName,
  displayName,
  fileName,
  fontUrl,
  onDownload,
  onDeletion,
}: FontDisplayProps) => {
  const theme = useMantineTheme();
  const [fontSize, setFontSize] = useState(
    Number(theme.headings.sizes.h1.fontSize?.valueOf() ?? 0)
  );
  const [letterSpacing, setLetterSpacing] = useState(0);
  const { classes } = useStyles({ fontName, fontSize, letterSpacing });

  useEffect(() => {
    new FontFace(fontName, `url(${fontUrl})`).load().then((loadedFont) => {
      document.fonts.add(loadedFont);
    });
  }, [fontName, fontUrl]);

  return (
    <Flex justify="space-between" align="center">
      <Grid align="flex-end" className={classes.autoSized}>
        <Grid.Col span={12}>
          <Title order={1} className={classes.fontDisplay}>
            {text || PLACEHOLDER_TEXT}
          </Title>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text>{displayName}</Text>
          <Divider />
        </Grid.Col>
        <Grid.Col span={3}>
          <Text>{FONT_SIZE}</Text>
          <Slider
            size={1}
            value={fontSize}
            onChange={setFontSize}
            min={MIN_FONT_SIZE}
            max={MAX_FONT_SIZE}
            label={formatSliderLabel}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Text>{LETTER_SPACING}</Text>
          <Slider
            size={1}
            value={letterSpacing}
            onChange={setLetterSpacing}
            min={0}
            max={MAX_LETTER_SPACING}
            label={formatSliderLabel}
          />
        </Grid.Col>
        <Grid.Col span="auto"></Grid.Col>
      </Grid>
      <Button size="xl" p={19}>
        <FaDownload />
      </Button>
    </Flex>
  );
};

function formatSliderLabel(value: number) {
  return <span dir="ltr">{value} px</span>;
}
