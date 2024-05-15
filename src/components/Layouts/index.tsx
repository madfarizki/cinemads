import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
}

export default Layouts;
