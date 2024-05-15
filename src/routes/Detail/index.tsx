import { Layouts } from "@/components/index";
import Hero from "./sections/Hero";
import { Flex } from "@chakra-ui/react";

function Detail() {
  return (
    <Layouts>
      <Flex flex="1" direction="column" justify="center" align="center" gap={24}>
        <Hero />
      </Flex>
    </Layouts>
  );
}

export default Detail;
