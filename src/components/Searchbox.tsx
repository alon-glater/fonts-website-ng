import React, { useState } from "react";
import { ActionIcon, Autocomplete, Flex, createStyles } from "@mantine/core";
import { ImSearch } from "react-icons/im";

const useStyles = createStyles({
  icon: {
    direction: "ltr",
    left: 0,
  },
  searchbox: {
    borderRadius: 20,
    width: 235,
    transition: "width .5s ease, padding .5s ease",
    "&:.active": {
      width: 235,
    },
  },
  hidden: {
    width: 0,
    padding: 0,
    border: 0,
  },
});

export const Searchbox: React.FC = () => {
  const { classes, cx } = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Flex align="center">
      <div style={{ width: 235, direction: "ltr" }}>
        <Autocomplete
          classNames={{
            input: cx(classes.searchbox, {
              [classes.hidden]: open !== true,
            }),
          }}
          placeholder="...חיפוש"
          data={[]}
        />
      </div>
      <ActionIcon
        variant="transparent"
        onClick={() => setOpen((open) => !open)}
      >
        <ImSearch />
      </ActionIcon>
    </Flex>
  );
};
