import { Box, Text } from "@chakra-ui/react";
import { CardMovie, Tabs } from "@/components/index";
import Slider from "react-slick";
import { SliderType } from "@/types/slider.type";
import { useMemo, useState } from "react";
import { useFetchAllTopRated } from "@/utils/api/useMovie";

type Props = {
  settings: SliderType;
};

function TopRated({ settings }: Props) {
  const [type, setType] = useState("movie");
  const { data: topRatedData, isFetching } = useFetchAllTopRated(type);

  const allTrending = useMemo(() => topRatedData?.data?.results, [topRatedData]);

  const onTabChange = (tab: string) => {
    setType(tab === "Movie" ? "movie" : "tv");
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="3xl" fontWeight="bold" mb={4} mr={4}>
          Top Rated 🌟
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

export default TopRated;
