import { CardMovie } from "@/components/index";
import { useFetchAllPopular, useFetchAllTopRated } from "@/utils/api/useMovie";
import { Box, Container, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import Slider from "react-slick";
import Trending from "./Trending";

function Movie() {
  const { data: popularData } = useFetchAllPopular("movie");
  const { data: topRatedData } = useFetchAllTopRated("movie");

  const allPopular = useMemo(() => popularData?.data?.results, [popularData]);
  const allTopRated = useMemo(() => topRatedData?.data?.results, [topRatedData]);

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
    <Container maxW="container.xl" display="flex" flexDirection="column" gap={24}>
      <Trending settings={settings} />
      <Box>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Popular
        </Text>
        <Slider {...settings}>
          {allPopular?.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </Slider>
      </Box>
      <Box>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Top Rated
        </Text>
        <Slider {...settings}>
          {allTopRated?.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </Slider>
      </Box>
    </Container>
  );
}

export default Movie;
