import React from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/core";
import { SearchBar } from "./search";
import { Repo } from "./repository";
import { User } from "./user";


export function Feed() {
  return (
    <Box maxWidth="1200px" mx="auto" alignItems="center">
      <SearchBar/>
      <SimpleGrid columns={3} spacing="15px">
          <Repo/>
          <Repo/>
          <Repo/>
          <Repo/>
          <Repo/>
          <Repo/>

          <User/>
          <User/>
          <User/>
          <User/>


      </SimpleGrid>
    </Box>
  );
}
