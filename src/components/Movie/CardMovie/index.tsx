import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function CardMovie({ movie }) {
  return (
    <Box key={movie.id} w="100%" h="100%" mr={4} p={3} position="relative">
      <Image rounded="md" src={movie.imageUrl} alt={movie.title} />
      <Box position="absolute" top={6} right={6} _hover={{ cursor: "pointer" }}>
        <Icon as={FaRegHeart} color="red" boxSize={6} />
      </Box>
      <Flex justifyContent="space-between" alignItems="center" mt="2">
        <Flex gap={1} justifyContent="center" alignItems="center">
          <Icon as={FaStar} color="yellow.400" />
          7.0
        </Flex>
        <Text>150 min</Text>
      </Flex>
      <Text fontSize={"xl"} fontWeight="bold">
        Godzilla x Kong: The New Empire (2024)
      </Text>
    </Box>
  );
}

export default CardMovie;
