import { useFetchAllMovieTranding } from "@/utils/api/useMovie";
import { useConfigurationContext } from "@/utils/context/configurationContext";
import { Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const history = useHistory();

  const { baseUrl } = useConfigurationContext();

  const { data: trendingData } = useFetchAllMovieTranding("week");

  const allTrending = useMemo(() => trendingData?.data?.results, [trendingData]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % (allTrending?.length || 1));
    }, 15000);

    return () => clearInterval(intervalId);
  }, [allTrending]);

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

  const backdropPath = allTrending?.[currentSlideIndex]?.backdrop_path;
  const dynamicBackground = backdropPath
    ? `url('${baseUrl}${backdropPath}')`
    : "url(https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg)";

  return (
    <Flex
      as="section"
      h="100vh"
      w="100%"
      bgImage={`linear-gradient(to top, rgba(4, 21, 45,0.9), rgba(4, 21, 45,0.5)), ${dynamicBackground}`}
      bgSize="cover"
      bgPosition="center"
      color="white"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={8}>
      <Flex direction="column" alignItems="center">
        <Text fontSize={["5xl", "6xl", "7xl"]} fontWeight="bold" mb={4}>
          Discover Amazing Movies
        </Text>
        <Text fontSize="2xl" fontWeight="medium" mb={8}>
          Explore a vast collection of movies and find your next favorite.
        </Text>
        <InputGroup w="100%" maxW="2xl">
          <Input
            type="text"
            placeholder="Search for movies..."
            borderRadius="full"
            py={8}
            pr={8}
            pl={8}
            bg="white"
            color="gray.800"
            _placeholder={{ color: "gray.400" }}
            border="none"
            outline="none"
            fontSize={["md", "lg", "xl"]}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
          <InputRightElement height="100%" py={8} width="5rem" borderRightRadius="full">
            <Button
              size="md"
              py={8}
              bg="primary.button"
              color="white"
              borderRightRadius="full"
              fontSize={["md", "lg", "lg"]}
              _hover={{ bg: "primary.buttonHover" }}
              onClick={handleSearch}>
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
}

export default Hero;
