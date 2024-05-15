import { Container } from "@chakra-ui/react";

import Trending from "./Trending";
import Popular from "./Popular";
import TopRated from "./TopRated";

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
    <Container maxW="container.xl" display="flex" flexDirection="column" gap={24} mb={24}>
      <Trending settings={settings} />
      <Popular settings={settings} />
      <TopRated settings={settings} />
    </Container>
  );
}

export default Movie;
