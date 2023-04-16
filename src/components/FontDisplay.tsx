import React, { useEffect } from "react";
import { Container, Grid, Title } from "@mantine/core";

const PLACEHOLDER_TEXT = "אבגדהוזחטיכלמנסעפצקרשת0123456";

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
  useEffect(() => {
    new FontFace(fontName, `url(${fontUrl})`).load().then((loadedFont) => {
      document.fonts.add(loadedFont);
    });
  }, [fontName, fontUrl]);

  return (
    <Grid>
      <Grid.Col span={12}>
        <Title order={1} style={{ fontFamily: fontName }}>
          {displayName}
        </Title>
      </Grid.Col>
    </Grid>
  );
};
