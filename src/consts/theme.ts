import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/montserrat";

const themes = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    primary: "#04152d",
    red: "#D90429",
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#fffff", "#04152d")(props),
      },
    }),
  },
};

const theme = extendTheme(themes);

export default theme;
