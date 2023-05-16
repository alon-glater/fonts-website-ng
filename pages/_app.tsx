import { AppProps } from "next/app";
import Head from "next/head";
import {
  MantineProvider,
  AppShell,
  createStyles,
  createEmotionCache,
  Group,
  Autocomplete,
  Container,
  ButtonStylesParams,
} from "@mantine/core";
import rtlPlugin from "stylis-plugin-rtl";
import { Header } from "../src/components/Header";
import "../styles/globals.css";

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>רב-גופן</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
        theme={{
          dir: "rtl",
          colorScheme: "light",
          colors: {
            brand: [
              "#F1E7FD",
              "#D7BDFA",
              "#BE92F6",
              "#A468F3",
              "#8B3DF0",
              "#7113EC",
              "#5A0FBD",
              "#440B8E",
              "#2D085E",
              "#17042F",
            ],
          },
          primaryColor: "brand",
          primaryShade: 4,
          components: {
            Button: {
              styles: {
                root: {
                  borderRadius: 45,
                  padding: 12,
                  transition: "background-color .2s linear",
                },
              },
            },
            Container: {
              styles: {
                root: {
                  height: "100%",
                },
              },
            },
            Slider: {
              styles: {
                bar: {
                  backgroundColor: "black",
                },
                thumb: {
                  borderColor: "black",
                  color: "black",
                },
              },
            },
            TextInput: {
              styles: {
                input: {
                  transition: "all .2s linear",
                },
              },
            },
          },
        }}
      >
        <Container maw={1140}>
          <AppShell header={<Header />} padding={0}>
            <Component {...pageProps} />
          </AppShell>
        </Container>
      </MantineProvider>
    </>
  );
}
