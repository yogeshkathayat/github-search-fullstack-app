import React from "react";
import { useSelector } from "react-redux";
import { Box, SimpleGrid, Spinner,useToast } from "@chakra-ui/core";
import { SearchBar } from "./search";
import { Repo } from "./repository";
import { User } from "./user";
import { TUser, TRepository, TState } from "../types";

export function Feed() {
  const toast = useToast();

  const searchResults = useSelector((state: TState) => state.searchResult.data);
  const isSearching = useSelector(
    (state: TState) => state.searchResult.isSearching
  );
  const error = useSelector(
    (state: TState) => state.searchResult.error
  );
    const type = useSelector(
    (state: TState) => state.searchResult.type
  );

  return (
    <Box maxWidth="1200px" mx="auto" alignItems="center">
      <SearchBar />

      {isSearching && (
        <Box alignItems="center" ml="600px">
          {" "}
          <Spinner size="lg" />
        </Box>
      )}
      <SimpleGrid columns={3} spacing="15px" >
        {type === "repository"
          ? searchResults.map((result: TRepository) => <Repo {...result} />)
          : searchResults.map((result: TUser) => <User {...result} />)}
      </SimpleGrid>

      {error &&  toast({
          title: "An error occurred.",
          description: error,
          status: "error",
          duration: 9000,
          isClosable: true,
        })}
    </Box>
  );
}
