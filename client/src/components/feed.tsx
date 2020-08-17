import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchGithub } from "../store/searchResult";
import { Box, SimpleGrid, Spinner,useToast } from "@chakra-ui/core";
import { SearchBar } from "./search";
import { Repo } from "./repository";
import { User } from "./user";
import _ from "lodash";
import { TUser, TRepository, TState } from "../types";

export function Feed() {
  const toast = useToast();

  const [search, setSearch] = useState("");
  const [type, setType] = useState("user");

  const searchResults = useSelector((state: TState) => state.searchResult.data);
  const isSearching = useSelector(
    (state: TState) => state.searchResult.isSearching
  );
  const error = useSelector(
    (state: TState) => state.searchResult.error
  );
  const dispatch = useDispatch();

  let updateState = useCallback(async (search: string, type: string) => {
    setType(type);
    setSearch(search);
  }, []);

  const debounceSearch = useRef(
    _.debounce(async (search: string, type: string) => {
      dispatch(searchGithub(search, type));
    }, 1000)
  );

  useEffect(() => {
    if (search) {
      debounceSearch.current(search, type);
    }
  }, [search, type]);

  return (
    <Box maxWidth="1200px" mx="auto" alignItems="center">
      <SearchBar onSearch={updateState} />
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
