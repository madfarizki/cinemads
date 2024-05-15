import { useConfigurationContext } from "@/utils/context/configurationContext";
import { useBookmarkContext } from "@/utils/context/bookmarkContext";
import { MovieDetail } from "@/utils/fetcher/movie";
import { Box, Flex, Icon, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

type Props = {
  movie: {
    id: number;
    title?: string;
    name?: string;
    poster_path: string;
    vote_average: number;
    media_type: string;
  };
  loading?: boolean;
};

function CardMovie(props: Props) {
  const { movie, loading } = props;
  const { id, title, name, poster_path, vote_average, media_type } = movie;

  const { baseUrl } = useConfigurationContext();
  const { bookmarks, addBookmark, removeBookmark } = useBookmarkContext();
  const history = useHistory();

  const handleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(id);
    } else {
      addBookmark({
        id: Number(id),
        poster_path: poster_path,
        title: title || name,
        name: name || title,
        vote_average: vote_average,
        media_type: media_type,
      });
    }
  };

  const isBookmarked = bookmarks?.some((bookmark) => bookmark.id === id);

  if (loading) {
    return (
      <Stack mr={4} p={3}>
        <Skeleton height="345px" rounded="xl" />
        <Skeleton height="20px" rounded="xl" />
      </Stack>
    );
  }

  return (
    <Box key={id} w="100%" h="100%" mr={4} p={3} position="relative">
      <Box
        position="absolute"
        top={6}
        right={6}
        _hover={{
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out",
          transform: "scale(1.1)",
        }}
        zIndex="9"
        bg="gray.50"
        px={2}
        pt={2}
        rounded="xl"
        onClick={handleBookmark}>
        <Icon
          as={isBookmarked ? FaHeart : FaRegHeart}
          color={isBookmarked ? "red" : "gray"}
          boxSize={5}
        />
      </Box>
      <Box _hover={{ cursor: "pointer" }} onClick={() => history.push(`/${media_type}/${id}`)}>
        <Box h="346px">
          <LazyLoadImage
            src={baseUrl + poster_path}
            alt={title}
            effect="blur"
            style={{ borderRadius: "0.5rem" }}
          />
        </Box>
        <Flex justifyContent="space-between" alignItems="start" mt="2" gap={2}>
          <Text
            fontSize={"xl"}
            fontWeight="bold"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis">
            {title || name}
          </Text>
          <Flex gap={1} justifyContent="center" alignItems="center">
            <Icon as={FaStar} color="yellow.400" />
            {vote_average?.toFixed(1)}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default CardMovie;
