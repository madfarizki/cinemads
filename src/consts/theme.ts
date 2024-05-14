import { extendTheme } from "@chakra-ui/react";
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
};

const theme = extendTheme(themes);

export default theme;
