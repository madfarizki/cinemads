import { Flex } from "@chakra-ui/react";
import Header from "./Header";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      {children}
    </Flex>
  );
}

export default Layouts;
