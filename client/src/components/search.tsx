import React from "react";
import {
  Button,
  Flex,
  Box,
  Heading,
  Stack,
  Text,
  Select,
  Input,
} from "@chakra-ui/core";
import { Header } from "./header";
export function SearchBar() {
  return (
    <Flex alignItems="center"  pt='15px' ml="400px">
      <Stack isInline={false} mb="20px">
        <Header />
        <Stack isInline={true} mb="20px" mt="20px">
         <Box> <Input placeholder="Start typing to search..." width="300px"/> </Box>
          <Select size="md">
            <option value="user">Users</option>
            <option value="repository">Repositories</option>
          </Select>
        </Stack>
      </Stack>
    </Flex>
  );
}
