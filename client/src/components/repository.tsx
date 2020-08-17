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
import { TRepository } from "../types";

export function Repo(props: TRepository) {
  return (
    <Flex borderWidth={1} rounded="5px" bg="white" alignItems="center" p="15px">
      <Flex flex={1} flexDir="column">
        <Box mb="15px">
          <Box mb="10px">
            <Heading fontSize="19px" as="a" color="purple.700">
              {props.name}
            </Heading>
            <Box ml="10px">
              <Link fontSize="13px" href={props.html_url} target="_blank">
                view repository
              </Link>
            </Box>
          </Box>

          <Text fontSize="14px"> {props.description}</Text>
        </Box>
        <Flex mb="15px">
          <Image
            width="30px"
            height="30px"
            rounded="5px"
            src={props.owner_avatar_url}
          />
          <Box ml="10px">
            <Text fontSize="14px" color="gray.600">
              Built by &middot;
              <Link
                fontWeight={600}
                href={props.owner_html_url}
                target="_blank"
              >
                {props.owner_login}
              </Link>
            </Text>
          </Box>
        </Flex>
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
            {props.stargazers_count}
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
            {" "}
            {props.forks_count}
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
            {props.open_issues_count}
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
