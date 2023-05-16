import React from "react";
import { clsx, createStyles, Text, Title, Header } from "@mantine/core";

const useStyles = createStyles({
  banner: {
    backgroundImage: 'url("home-banner.webp")',
    backgroundPosition: "center",
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    height: "233px",
  },
  content: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
});

export const Banner: React.FC = () => {
  const { classes } = useStyles();

  return (
    <header style={{ position: "relative" }}>
      <div className={clsx("Banner", classes.banner)}></div>
      <Text size={92} className={classes.content} color="white">
        מה תרצו לכתוב היום?
      </Text>
    </header>
  );
};
