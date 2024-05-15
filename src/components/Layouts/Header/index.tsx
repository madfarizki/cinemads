import { Container, Flex, Icon, Input, Link, Text, useColorMode } from "@chakra-ui/react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { useState } from "react";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const history = useHistory();
  const location = useLocation();
  const { query } = useParams<{ query: string }>();

  const [searchQuery, setSearchQuery] = useState(query || "");

  const isHomePage = location.pathname === "/";

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      history.push(`/search/${searchQuery}`);
    }
  };

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      handleSearch();
    }
  };

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
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Text
            fontSize="3xl"
            fontWeight="bold"
            color="white"
            onClick={() => history.push("/")}
            _hover={{ cursor: "pointer" }}>
            CineMads
          </Text>
          <Flex alignItems="center" ml={4}>
            {!isHomePage && (
              <Input
                w="280px"
                placeholder="Search for movies..."
                variant="outline"
                color="white"
                mr={4}
                bg="transparent"
                borderColor="white"
                _hover={{ borderColor: "primary" }}
                _focus={{ borderColor: "primary" }}
                _placeholder={{ color: "white" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
            )}
            <Link
              color="white"
              mr={4}
              _hover={{ textDecoration: "none", color: "red" }}
              onClick={() => history.push("/explore/movie")}>
              <Text fontSize="xl" fontWeight="semibold">
                Movies
              </Text>
            </Link>
            <Link
              color="white"
              mr={4}
              _hover={{ textDecoration: "none", color: "red" }}
              onClick={() => history.push("/explore/tv")}>
              <Text fontSize="xl" fontWeight="semibold">
                TV
              </Text>
            </Link>
            <Link
              color="white"
              mr={4}
              _hover={{ textDecoration: "none", color: "red" }}
              onClick={() => history.push("/saved")}>
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
