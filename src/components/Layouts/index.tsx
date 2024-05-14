import { Flex } from "@chakra-ui/react";
import Header from "./Header";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex flex="1" justify="center" align="center">
        {children}
      </Flex>
    </Flex>
  );
}

export default Layouts;
