import { Avatar, Box, Button, Container, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsBookmarkHeart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { IoCalendarSharp } from "react-icons/io5";

function Hero() {
  return (
    <Container maxW="container.xl" display="flex" flexDirection="column" gap={24} pt={30}>
      <HStack alignItems="start" spacing={12}>
        <Box>
          <LazyLoadImage
            width="340px"
            src="https://image.tmdb.org/t/p/original/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg"
            alt="a"
            effect="blur"
            style={{ borderRadius: "0.5rem" }}
          />
        </Box>
        <Box>
          <HStack spacing={4}>
            <Tag size="md" variant="solid" bg="yellow.500">
              Teal
            </Tag>
          </HStack>
          <Text fontSize={["xl", "2xl", "5xl"]} fontWeight="bold" mt={2}>
            The Movie Title
          </Text>
          <HStack spacing={4} mt={2}>
            <HStack>
              <Icon as={FaStar} boxSize="6" color="yellow.200" />
              <Text fontSize="md">7.0</Text>
            </HStack>
            <HStack>
              <Icon as={PiUsersFourFill} boxSize="6" color="teal.200" />
              <Text>300.000</Text>
            </HStack>
            <HStack>
              <Icon as={IoCalendarSharp} boxSize="6" color="purple.200" />
              <Text>2024</Text>
            </HStack>
          </HStack>
          <Stack direction="row" spacing={4} mt="6">
            <Button
              rounded="3xl"
              size="lg"
              leftIcon={<BsBookmarkHeart />}
              bg="primary.button"
              variant="solid"
              color="white"
              _hover={{ bg: "primary.buttonHover" }}>
              Watch Later
            </Button>
          </Stack>
          <Box mt={8}>
            <HStack align="flex-start" spacing={24}>
              <Box w="100%">
                <Text fontSize="1xl" fontWeight="bold">
                  OVERVIEW
                </Text>
                <Text as="p" fontSize="xl" mt={2} color="gray.300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nobis dolore amet
                  aut nisi sequi fugit. Repellendus in veritatis nesciunt fugit provident delectus
                  harum, blanditiis accusantium quos saepe quasi aperiam porro mollitia cupiditate
                  cumque molestiae eos vel unde? Et placeat laboriosam aliquid, iusto expedita eos
                  eum reiciendis, ratione explicabo adipisci assumenda voluptatum similique
                  dignissimos laborum temporibus ab in.
                </Text>
              </Box>
              <Box w="50%">
                <Text fontSize="1xl" fontWeight="bold">
                  CAST
                </Text>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://image.tmdb.org/t/p/original/ut7ewXjdgUmgkhJ1EtbOo9tbc7s.jpg"
                    mt={2}
                  />
                  <Box>
                    <Text fontSize="lg" fontWeight="bold" mt={2} color="gray.300">
                      Dan Abramov
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mt={-1} color="gray.500">
                      Dan Abramov
                    </Text>
                  </Box>
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
