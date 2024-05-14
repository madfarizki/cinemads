import { useConfigurationContext } from "@/utils/context/configurationContext";
import { MovieDetail } from "@/utils/fetcher/movie";
import { Box, Flex, Icon, Image, Skeleton, Stack, Text } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
  movie: MovieDetail;
  loading?: boolean;
};

function CardMovie(props: Props) {
  const { movie, loading } = props;
  const { id, title, name, poster_path, vote_average } = movie;

  const { baseUrl } = useConfigurationContext();

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
        _hover={{ cursor: "pointer" }}
        zIndex="9"
        bg="gray.50"
        px={2}
        pt={2}
        rounded="xl">
        <Icon as={FaRegHeart} color="red" boxSize={6} />
      </Box>
      <Box _hover={{ cursor: "pointer" }}>
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
