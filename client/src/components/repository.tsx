import React from "react";
import {
  Box,
  Stack,
  Button,
  Image,
  Heading,
  Text,
  Flex,
  Link,
} from "@chakra-ui/core";
import { GoStar, GoRepoForked, GoIssueOpened } from "react-icons/go";

export function Repo() {
  return (
    <Flex borderWidth={1} rounded="5px" bg="white" alignItems="center" p="15px">
      <Flex flex={1} flexDir="column">
        <Flex mb="15px">
          <Image
            width="30px"
            height="30px"
            rounded="5px"
            src="https://avatars0.githubusercontent.com/u/18413467?s=460&u=f9d95e3568f4bd20b2eee96d7993830c80c5c42e&v=4"
          />
          <Box ml="10px">
            <Heading fontSize="16px">Yogesh Kathayat </Heading>
            <Text fontSize="13px"> view profile </Text>
          </Box>
        </Flex>
        <Box mb="15px">
          <Box mb="10px">
            <Heading
              fontSize="19px"
              as="a"
              color="purple.700"
            >
              GitHunt
            </Heading>
            <Text fontSize="14px" color="gray.600">
              Built by &middot;
              <Link
                fontWeight={600}
                href="https://github.com/yogeshkathayat"
                target="_blank"
              >
                Yogesh Kathayat
              </Link>
            </Text>
          </Box>

          <Text fontSize="14px">Hunt the most starred repository</Text>
        </Box>

        <Stack isInline={true}>
          <Button
            as="a"
            cursor="pointer"
            leftIcon={GoStar}
            variant="link"
            fontSize="14px"
            iconSpacing="4px"
            _hover={{ textDecor: "none" }}
          >
            3456
          </Button>
          <Button
            as="a"
            cursor="pointer"
            leftIcon={GoRepoForked}
            variant="link"
            fontSize="14px"
            iconSpacing="4px"
            _hover={{ textDecor: "none" }}
          >
            16
          </Button>
          <Button
            as="a"
            cursor="pointer"
            leftIcon={GoIssueOpened}
            variant="link"
            fontSize="14px"
            iconSpacing="4px"
            _hover={{ textDecor: "none" }}
          >
            346
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
