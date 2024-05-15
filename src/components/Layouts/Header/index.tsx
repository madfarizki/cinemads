import { Button, Container, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const history = useHistory();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="100%"
      p={4}
      bg="rgba(0,0,0, 0.25)"
      backdropFilter="blur(3.5px)"
      position="fixed"
      zIndex="999">
      <Container maxW="container.lg">
        <Flex align="center" justify="space-between">
          <Text
            fontSize="3xl"
            fontWeight="bold"
            color="white"
            onClick={() => history.push("/")}
            _hover={{ cursor: "pointer" }}>
            CineMads
          </Text>
          <Flex ml={4}>
            <Button variant="link" color="white" mr={4}>
              Menu 1
            </Button>
            <Button variant="link" color="white" mr={4} onClick={toggleColorMode}>
              {colorMode}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Header;
