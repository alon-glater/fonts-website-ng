import {
  Header as MantineHeader,
  Grid,
  Center,
  Flex,
  createStyles,
  Button,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { Searchbox } from "./Searchbox";

const HEADER_HEIGHT = 114.56;
const HEADER_MAX_WIDTH = 1240;

const useStyles = createStyles((theme) => ({
  link: {
    whiteSpace: "nowrap",
  },
}));

const links = [
  {
    label: "מי אנחנו",
    link: "",
  },
  {
    label: "שאלות נפוצות",
    link: "",
  },
  {
    label: "מדריך",
    link: "",
  },
  {
    label: "צרו קשר",
    link: "",
  },
];

export const Header: React.FC = () => {
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Link key={link.label} href={link.link}>
      <span className={classes.link}>{link.label}</span>
    </Link>
  ));

  return (
    <MantineHeader height={HEADER_HEIGHT}>
      <Center h="100%">
        <Grid maw={HEADER_MAX_WIDTH} gutter={40} align="center">
          <Grid.Col span="auto">
            <Flex gap="2em" pr="2em">
              {items}
            </Flex>
          </Grid.Col>
          <Grid.Col span="content">
            <div
              style={{ width: "236px", height: "51px", position: "relative" }}
            >
              <Image
                src="/logo.webp"
                alt="Logo"
                layout="fill"
                objectFit="contain"
                style={{ aspectRatio: "auto 1344/288", maxWidth: 236 }}
              />
            </div>
          </Grid.Col>
          <Grid.Col span="auto">
            <Flex gap="1em">
              <Searchbox />
              <Button>תמכו בנו!</Button>
            </Flex>
          </Grid.Col>
        </Grid>
      </Center>
    </MantineHeader>
  );
};
