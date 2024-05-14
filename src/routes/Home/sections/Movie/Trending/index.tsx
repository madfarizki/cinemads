import { Box, Text } from "@chakra-ui/react";
import { CardMovie, Tabs } from "@/components/index";
import Slider from "react-slick";
import { SliderType } from "@/types/slider.type";
import { useMemo, useState } from "react";
import { useFetchAllMovieTranding } from "@/utils/api/useMovie";

type Props = {
  settings: SliderType;
};

function Trending({ settings }: Props) {
  const [time, setTime] = useState("day");
  const { data: trendingData, isFetching } = useFetchAllMovieTranding(time);

  const allTrending = useMemo(() => trendingData?.data?.results, [trendingData]);

  const onTabChange = (tab: string) => {
    setTime(tab === "Day" ? "day" : "week");
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="3xl" fontWeight="bold" mb={4} mr={4}>
          Trending
        </Text>
        <Tabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </Box>
      <Slider {...settings}>
        {allTrending?.map((movie) => (
          <CardMovie key={movie.id} movie={movie} loading={isFetching} />
        ))}
      </Slider>
    </Box>
  );
}

export default Trending;
