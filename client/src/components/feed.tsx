import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box, SimpleGrid, Spinner } from "@chakra-ui/core";
import { SearchBar } from "./search";
import { Repo } from "./repository";
import { User } from "./user";
import axios from "axios";
import _ from "lodash";
import { GITHUB_SEARCH_API } from "../config/config";
import { TUser, TRepository } from "../types";

export function Feed() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("user");
  const [data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // Searching status (whether there is pending API request)

  let updateState = useCallback(async (search: string, type: string) => {
    if (search.length >= 3) {
      setType(type);
      setSearch(search);
    } else {
      setData([]);
    }
  }, []);

  const debounceSearch = useRef(
    _.debounce(async (search: string, type: string) => {
      let searchResult = await axios.post(GITHUB_SEARCH_API, {
        search: search,
        type: type,
      });
      setIsSearching(false);
      if (searchResult.data.data) {
        setData(searchResult.data.data);
      } else {
        setData([]);
      }
    }, 1000)
  );

  useEffect(() => {
    if (search) {
      setIsSearching(true);
      debounceSearch.current(search, type);
    } else {
      setData([]);
    }
  }, [search, type]);

  return (
    <Box maxWidth="1200px" mx="auto" alignItems="center">
      <SearchBar
        onSearch={updateState}
        pos="absolute"
        top="50%"
        left="50%"
        //   style={{
        //     position: 'absolute', left: '50%', top: '50%',
        //     transform: 'translate(-50%, -50%)'
        // }}
      />
      {isSearching && (
        <Box alignItems="center" ml="600px">
          {" "}
          <Spinner size="lg" />
        </Box>
      )}
      <SimpleGrid columns={3} spacing="15px">
        {type === "repository"
          ? data.map((result: TRepository) => <Repo {...result} />)
          : data.map((result: TUser) => <User {...result} />)}
      </SimpleGrid>
    </Box>
  );
}
