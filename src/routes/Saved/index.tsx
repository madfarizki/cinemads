import { CardMovie, Layouts } from "@/components/index";
import { useBookmarkContext } from "@/utils/context/bookmarkContext";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

function Saved() {
  const { bookmarks } = useBookmarkContext();

  return (
    <Layouts>
      <Container maxW="container.xl" py={32} px={0}>
        <Text fontSize="3xl" fontWeight="bold" mb={8}>
          Saved Movies
        </Text>
        <Flex justifyContent="start" alignItems="start" mb={4} rowGap={12} flexWrap="wrap">
          {bookmarks?.length ? (
            bookmarks?.map((movie) => (
              <Box key={movie.id} w="250px">
                <CardMovie movie={movie} />
              </Box>
            ))
          ) : (
            <Text fontSize="xl" fontWeight="bold" textAlign="center" w="100%">
              No movie saved!
            </Text>
          )}
        </Flex>
      </Container>
    </Layouts>
  );
}

export default Saved;
