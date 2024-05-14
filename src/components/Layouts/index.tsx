import { Flex } from "@chakra-ui/react";
import Header from "./Header";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex flex="1" direction="column" justify="center" align="center" gap={24}>
        {children}
      </Flex>
    </Flex>
  );
}

export default Layouts;
