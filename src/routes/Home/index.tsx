import { Layouts, Hero } from "@/components/index";
import { Movie } from "./sections/index";
import { Flex } from "@chakra-ui/react";

function Home() {
  return (
    <Layouts>
      <Flex flex="1" direction="column" justify="center" align="center" gap={24}>
        <Hero />
        <Movie />
      </Flex>
    </Layouts>
  );
}

export default Home;
