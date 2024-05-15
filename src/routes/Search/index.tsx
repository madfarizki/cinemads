import { CardMovie, Layouts } from "@/components/index";
import { useSearchMovie } from "@/utils/api/useMovie";
import { SearchResponse } from "@/utils/fetcher/movie";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

function Search() {
  const { query } = useParams<{ query: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  const { data: searchData } = useSearchMovie({
    query: query,
    page: currentPage,
  });

  const searchResult = useMemo(() => searchData?.data || [], [searchData]) as SearchResponse;

  const movieData = searchResult?.results || [];
  console.log();

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < searchResult?.total_pages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Layouts>
      <Container maxW="container.xl" py={32} px={0}>
        <Text fontSize="3xl" fontWeight="bold" mb={8}>
          Search result for "{query}"
        </Text>
        <Flex justifyContent="start" alignItems="start" mb={4} rowGap={12} flexWrap="wrap">
          {movieData?.length ? (
            movieData?.map((movie) => (
              <Box key={movie.id} w="250px">
                <CardMovie movie={movie} />
              </Box>
            ))
          ) : (
            <Text fontSize="xl" fontWeight="bold" textAlign="center" w="100%">
              No movies found!
            </Text>
          )}
        </Flex>
        {movieData.length !== 0 && (
          <Flex justify="center" alignItems="center" mt={12} gap={8}>
            <Button onClick={handlePreviousPage} disabled={currentPage === 1} colorScheme="blue">
              Previous
            </Button>
            <Text fontWeight="bold">
              Page {currentPage} of {searchResult?.total_pages}
            </Text>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === searchResult?.total_pages}
              colorScheme="blue">
              Next
            </Button>
          </Flex>
        )}
      </Container>
    </Layouts>
  );
}

export default Search;
