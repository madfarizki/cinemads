import { CardMovie } from "@/components/index";
import { Box, Container, Text } from "@chakra-ui/react";
import Slider from "react-slick";

const movies = [
  {
    id: 1,
    title: "Movie 1",
    imageUrl: "https://image.tmdb.org/t/p/original/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
  },
  {
    id: 2,
    title: "Movie 2",
    imageUrl: "https://image.tmdb.org/t/p/original/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
  },
  {
    id: 3,
    title: "Movie 3",
    imageUrl: "https://image.tmdb.org/t/p/original/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
  },
  {
    id: 4,
    title: "Movie 4",
    imageUrl: "https://image.tmdb.org/t/p/original/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
  },
  {
    id: 5,
    title: "Movie 5",
    imageUrl: "https://image.tmdb.org/t/p/original/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
  },
  {
    id: 1,
    title: "Movie 1",
    imageUrl: "https://image.tmdb.org/t/p/original/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
  },
  {
    id: 2,
    title: "Movie 2",
    imageUrl: "https://image.tmdb.org/t/p/original/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
  },
  {
    id: 3,
    title: "Movie 3",
    imageUrl: "https://image.tmdb.org/t/p/original/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
  },
  {
    id: 4,
    title: "Movie 4",
    imageUrl: "https://image.tmdb.org/t/p/original/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
  },
  {
    id: 5,
    title: "Movie 5",
    imageUrl: "https://image.tmdb.org/t/p/original/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
  },
];

function Movie() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 3,
  };

  return (
    <Container maxW="container.xl">
      <Box mb={8}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Trending
        </Text>
        <Slider {...settings}>
          {movies.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </Slider>
      </Box>
    </Container>
  );
}

export default Movie;
