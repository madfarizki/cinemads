import { Container, Flex, Icon, Link, Text, useColorMode } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

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
            <Link color="white" mr={4} _hover={{ textDecoration: "none", color: "red" }}>
              <Text fontSize="xl" fontWeight="semibold">
                Saved
              </Text>
            </Link>
            <Link
              color="white"
              mr={4}
              _hover={{ textDecoration: "none", color: "red" }}
              onClick={toggleColorMode}
              display="flex"
              gap={2}
              alignItems="center">
              <Icon as={colorMode === "dark" ? BsFillMoonStarsFill : FiSun} />
              <Text fontSize="xl" fontWeight="semibold">
                {colorMode === "dark" ? "Dark" : "Light"}
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Header;
