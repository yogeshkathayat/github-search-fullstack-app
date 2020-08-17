import React from "react";
import {Flex, Box, Heading, Text } from "@chakra-ui/core";
import { FaGithub} from "react-icons/fa";

export function Header() {
  return (
    <Flex alignItems="center">
      <Box as={FaGithub} size="55px" />
      <Box ml="10px">
        <Heading fontSize="24px">GitHub Searcher</Heading>
        <Text color="gray.600">Search users or repositories below</Text>
      </Box>
    </Flex>
  );
}
