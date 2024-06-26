import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Skeleton,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsBookmarkHeart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { IoCalendarSharp } from "react-icons/io5";
import { useMovieById, useMovieCredit } from "@/utils/api/useMovie";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { CreditResponse, MovieDetailResponse } from "@/utils/fetcher/movie";
import { useConfigurationContext } from "@/utils/context/configurationContext";
import { useBookmarkContext } from "@/utils/context/bookmarkContext";

function Hero() {
  const { type, id } = useParams<{ type: string; id: string }>();

  const { baseUrl } = useConfigurationContext();
  const { bookmarks, addBookmark, removeBookmark } = useBookmarkContext();

  const { data: movieData, isFetching: isFetchingMovie } = useMovieById(type, Number(id));
  const { data: creditData } = useMovieCredit(type, Number(id));

  const movieDetail = useMemo(() => movieData?.data || [], [movieData]) as MovieDetailResponse;
  const casts = useMemo(() => {
    const castArray = creditData?.data?.cast || [];
    return castArray?.slice(0, 3);
  }, [creditData]) as CreditResponse[];

  const {
    id: movieId,
    title,
    name,
    poster_path,
    vote_average,
    overview,
    release_date,
    genres,
    popularity,
  } = movieDetail;

  const handleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(Number(id));
    } else {
      addBookmark({
        id: Number(movieId),
        poster_path: poster_path,
        title: title || name,
        name: name || title,
        vote_average: vote_average,
        media_type: type,
      });
    }
  };

  const isBookmarked = bookmarks.some((bookmark) => bookmark.id === Number(id));

  if (isFetchingMovie) {
    return (
      <Container maxW="container.xl" display="flex" flexDirection="column" gap={24} pt={30}>
        <HStack alignItems="start" spacing={10}>
          <Skeleton height="484px" width="340px" rounded="xl" />
          <VStack gap={6}>
            <Skeleton height="230px" width="340px" rounded="xl" />
            <Skeleton height="230px" width="340px" rounded="xl" />
          </VStack>
          <VStack gap={6}>
            <Skeleton height="230px" width="340px" rounded="xl" />
            <Skeleton height="230px" width="340px" rounded="xl" />
          </VStack>
        </HStack>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" display="flex" flexDirection="column" gap={24} pt={30}>
      <HStack alignItems="start" spacing={12}>
        <Box>
          <LazyLoadImage
            width="340px"
            src={baseUrl + poster_path}
            alt={title || name}
            effect="blur"
            style={{ borderRadius: "0.5rem" }}
          />
        </Box>
        <Box>
          <HStack spacing={4}>
            {genres?.map(({ id, name }) => (
              <Tag size="md" variant="solid" bg="yellow.500" key={id}>
                {name}
              </Tag>
            ))}
          </HStack>
          <Text fontSize={["xl", "2xl", "5xl"]} fontWeight="bold" mt={2}>
            {title || name}
          </Text>
          <HStack spacing={4} mt={2}>
            <HStack>
              <Icon as={FaStar} boxSize="6" color="yellow.200" />
              <Text fontSize="md">{vote_average?.toFixed(1)}</Text>
            </HStack>
            <HStack>
              <Icon as={PiUsersFourFill} boxSize="6" color="teal.200" />
              <Text>{popularity}</Text>
            </HStack>
            {release_date && (
              <HStack>
                <Icon as={IoCalendarSharp} boxSize="6" color="purple.200" />
                <Text>{release_date?.split("-")[0]}</Text>
              </HStack>
            )}
          </HStack>
          <Stack direction="row" spacing={4} mt="6">
            <Button
              rounded="3xl"
              size="lg"
              leftIcon={<BsBookmarkHeart />}
              bg={isBookmarked ? "red" : "primary.button"}
              variant="solid"
              color="white"
              _hover={{ bg: "primary.buttonHover" }}
              onClick={handleBookmark}>
              {isBookmarked ? "Remove from Watch Later" : "Watch Later"}
            </Button>
          </Stack>
          <Box mt={8}>
            <HStack align="flex-start" spacing={24}>
              <Box w="100%">
                <Text fontSize="1xl" fontWeight="bold">
                  OVERVIEW
                </Text>
                <Text as="p" fontSize="xl" mt={3}>
                  {overview}
                </Text>
              </Box>
              <Box w="40%">
                <Text fontSize="1xl" fontWeight="bold">
                  TOP CAST
                </Text>
                <Stack spacing={2} mt={3}>
                  {casts?.map(({ name, character, profile_path }) => (
                    <Stack direction="row" alignItems="center" spacing={3}>
                      <Avatar name="Dan Abrahmov" src={baseUrl + profile_path} mt={2} />
                      <Box>
                        <Text fontSize="lg" fontWeight="bold" mt={2}>
                          {character}
                        </Text>
                        <Text fontSize="md" fontWeight="bold" mt={-1} color="gray.500">
                          {name}
                        </Text>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </HStack>
          </Box>
        </Box>
      </HStack>
    </Container>
  );
}

export default Hero;
