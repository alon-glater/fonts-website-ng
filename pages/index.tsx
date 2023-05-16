import type { GetStaticProps, NextPage } from "next";
import { Main } from "../src/components/Home";
import { Fontlike } from "../src/types";
import { FontCategory } from "../src/font-categories";
import { DataStore, Amplify } from "aws-amplify";
import { Font as _Font } from "../src/models";
import awsconfig from "../src/aws-exports";
Amplify.configure(awsconfig);
type HomeProps = {
  fonts: Fontlike[];
};

const Home: NextPage<HomeProps> = ({ fonts }) => {
  return (
    <Main
      fonts={fonts}
      totalFontsAmount={0}
      fontsPerPageAmount={5}
      selectedCategory={FontCategory.ALL}
      currentPage={1}
      onCategoryChange={() => undefined}
      onPageChange={() => undefined}
      onFontDownload={() => undefined}
      onFontDeletion={() => undefined}
    />
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const fonts = await DataStore.query(_Font);

  return {
    props: {
      fonts: fonts.map(({ id, name, url, displayName, format }) => ({
        id,
        name,
        url,
        displayName,
        format,
      })),
    },
  };
};
