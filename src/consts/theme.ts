import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/montserrat";

const themes = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    red: "#D90429",
    primary: {
      default: "#04152d",
      button: "linear-gradient(to top, #2356FB, #7091FD)",
      buttonHover: "linear-gradient(to top, #1c3faa, #628be7)",
    },
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
  components: {
    Button: {
      baseStyle: {
        background: "linear-gradient(to top, #2356FB, #7091FD)",
        color: "white",
        borderRadius: "md",
        paddingX: "4",
        paddingY: "2",
        _hover: {
          background: "linear-gradient(to top, #1c3faa, #628be7)",
        },
      },
    },
  },
};

const theme = extendTheme(themes);

export default theme;
