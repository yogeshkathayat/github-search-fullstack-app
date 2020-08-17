import React, { useState, useEffect} from "react";
import {
  Flex,
  Box,
  Stack,
  Select,
  Input,
} from "@chakra-ui/core";
import { Header } from "./header";
export function SearchBar({ onSearch }: any) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("user");

  console.log(search, type);
  useEffect(() => {
      console.log("useEffect", search, type);
      onSearch(search, type);
  }, [search, type,onSearch]);

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
