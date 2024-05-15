import { CardMovie, Layouts } from "@/components/index";
import { useExplore, useFetchAllGenre } from "@/utils/api/useMovie";
import { GenreResponse, SearchResponse } from "@/utils/fetcher/movie";
import { Box, Button, Container, Flex, HStack, Skeleton, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Select, { StylesConfig } from "react-select";

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
  { value: "original_name.asc", label: "Name (A-Z)" },
];

type SelectedItem = {
  id?: number;
  value: string;
  label: string;
};

type Action = {
  name: string;
  action: string;
};

type Filters = {
  sort_by?: string;
  with_genres?: number;
};

let filters: Filters = {};

function Explore() {
  const { type } = useParams<{ type: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);

  const { data: allData, isFetching } = useExplore(type, {
    page: currentPage,
    ...filters,
  });

  const { data: genreData } = useFetchAllGenre(type);

  const searchResult = useMemo(() => allData?.data || [], [allData]) as SearchResponse;
  const allGenre = useMemo(() => genreData?.data || [], [genreData]) as GenreResponse;

  const movieData = searchResult?.results || [];
  const allGenreData = allGenre?.genres || [];

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < searchResult?.total_pages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    filters = {};
    setCurrentPage(1);
    setSortby(null);
    setGenre(null);
  }, [type]);

  const onChange = (selectedItems: SelectedItem[] | null, action: Action) => {
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems?.value;
      } else {
        delete filters.sort_by;
      }
    }

    if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems?.map((g) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }

    setCurrentPage(1);
  };

  const selectStyles: StylesConfig<true> = {
    control: (styles) => ({
      ...styles,
      background: "yellow",
      color: "black",
      border: "none",
      fill: "black",
    }),
    placeholder: (styles) => ({ ...styles, color: "black", fontWeight: "bold" }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "black",
    }),
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "#04152d",
        color: "white",
      };
    },
    multiValueLabel: (styles) => ({
      ...styles,
      color: "white",
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: "white",
      ":hover": {
        backgroundColor: "red",
        color: "white",
      },
    }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "white",
        color: "black",
        cursor: "pointer",
      };
    },
  };

  return (
    <Layouts>
      <Container maxW="container.xl" py={32} px={0}>
        <HStack justifyContent="space-between">
          <Text fontSize="3xl" fontWeight="bold" mb={8}>
            Explore {type === "movie" ? "Movies" : "TV"}
          </Text>
          <Flex justifyContent="space-between" alignItems="center" mb={4} gap={4}>
            <Box>
              <Select
                isMulti
                name="genres"
                value={genre}
                closeMenuOnSelect={false}
                options={allGenreData}
                getOptionLabel={(option) => option?.name}
                getOptionValue={(option) => option?.id}
                onChange={onChange}
                placeholder="Select genres"
                styles={selectStyles}
              />
            </Box>
            <Box>
              <Select
                name="sortby"
                value={sortby}
                options={sortbyData}
                onChange={onChange}
                isClearable={true}
                placeholder="Sort by"
                className="react-select"
                styles={selectStyles}
              />
            </Box>
          </Flex>
        </HStack>
        {isFetching ? (
          <Flex justifyContent="center" alignItems="start" mb={4} gap={2} flexWrap="wrap">
            {Array(15)
              .fill(undefined)
              .map((_, idx) => (
                <Skeleton w="250px" h="380px" rounded="xl" key={idx} />
              ))}
          </Flex>
        ) : (
          <Flex justifyContent="start" alignItems="start" mb={4} rowGap={12} flexWrap="wrap">
            {movieData?.length ? (
              movieData?.map((movie) => (
                <Box key={movie.id} w="250px">
                  <CardMovie movie={movie} type={type} />
                </Box>
              ))
            ) : (
              <Text fontSize="xl" fontWeight="bold" textAlign="center" w="100%">
                No movies found!
              </Text>
            )}
          </Flex>
        )}

        {movieData.length !== 0 && (
          <Flex justify="center" alignItems="center" mt={12} gap={8}>
            <Button onClick={handlePreviousPage} disabled={currentPage === 1} colorScheme="blue">
              Previous
            </Button>
            <Text fontWeight="bold">
              Page {currentPage} of {searchResult?.total_pages}
            </Text>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === searchResult?.total_pages}
              colorScheme="blue">
              Next
            </Button>
          </Flex>
        )}
      </Container>
    </Layouts>
  );
}

export default Explore;
