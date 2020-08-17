import React, { useState, useEffect,useRef} from "react";
import {  useDispatch } from "react-redux";
import { searchGithub } from "../store/searchResult";
import _ from "lodash";
import {
  Flex,
  Box,
  Stack,
  Select,
  Input,
} from "@chakra-ui/core";
import { Header } from "./header";
export function SearchBar() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("user");
  const dispatch = useDispatch();
 

  const debounceSearch = useRef(
    _.debounce(async (search: string, type: string) => {
     dispatch(searchGithub(search, type));
    }, 1000)
  );
  useEffect(() => {
    debounceSearch.current(search, type);
  }, [search, type]);

  return (
    <Flex alignItems="center" pt="15px" ml="400px">
      <Stack isInline={false} mb="20px">
        <Header />
        <Stack isInline={true} mb="20px" mt="20px">
          <Box>
            {" "}
            <Input
              value={search}
              onChange={(e: any) => setSearch(e.target.value)}
              placeholder="Start typing to search..."
              width="300px"
            />{" "}
          </Box>
          <Select
            size="md"
            value={type}
            id="type"
            onChange={(e: any) => setType(e.target.value)}
          >
            <option value="user">Users</option>
            <option value="repository">Repositories</option>
          </Select>
        </Stack>
      </Stack>
    </Flex>
  );
}
