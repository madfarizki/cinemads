import { Box, Text } from "@chakra-ui/react";
import { CardMovie, Tabs } from "@/components/index";
import Slider from "react-slick";
import { SliderType } from "@/types/slider.type";
import { useMemo, useState } from "react";
import { useFetchAllPopular } from "@/utils/api/useMovie";

type Props = {
  settings: SliderType;
};

function Popular({ settings }: Props) {
  const [type, setType] = useState("movie");
  const { data: popularData, isFetching } = useFetchAllPopular(type);

  const allTrending = useMemo(() => popularData?.data?.results, [popularData]);

  const onTabChange = (tab: string) => {
    setType(tab === "Movie" ? "movie" : "tv");
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="3xl" fontWeight="bold" mb={4} mr={4}>
          Popular 🥳
        </Text>
        <Tabs data={["Movie", "TV"]} onTabChange={onTabChange} />
      </Box>
      <Slider {...settings}>
        {allTrending?.map((movie) => (
          <CardMovie key={movie.id} movie={movie} loading={isFetching} type={type} />
        ))}
      </Slider>
    </Box>
  );
}

export default Popular;
