import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, createStyles, createEmotionCache, Header, Group, Autocomplete } from '@mantine/core';
import rtlPlugin from 'stylis-plugin-rtl';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const { classes } = useStyles();

  const links = [
    {
      label: 'מי אנחנו',
      link: ''
    },
    {
      label: 'תמיכה',
      link: ''
    },
    {
      label: 'מדריך להתקנת פונטים',
      link: ''
    }
  ]
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
        theme={{
          dir: 'rtl',
          colorScheme: 'light',
        }}
      >
        <Header height={56} className={classes.header}>
          <div className={classes.inner}>
            <Group>
              <Group spacing={5} className={classes.links}>
                {items}
              </Group>
              <Autocomplete 
                className={classes.search}
                placeholder="חפש פונטים..."
                data={[]}
              />
            </Group>
          </div>
        </Header>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}