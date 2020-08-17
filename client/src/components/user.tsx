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
import {
  GoPerson,
  GoLocation,
  GoOrganization,
} from "react-icons/go";
import { TUser } from "../types";

export function User(props:TUser) {

  return (
    <Flex borderWidth={1} rounded="5px" bg="white" alignItems="center" p="15px">
      <Flex flex={1} flexDir="column">
        <Flex mb="15px">
          <Box ml="10px">
            <Heading fontSize="16px">{props.login}</Heading>
            <Link
              fontSize="13px"
              href={props.html_url}
              target="_blank"
            >
              view profile
            </Link>
          </Box>
        </Flex>

        <Box mb="15px">
          <Stack isInline={false}>
            <Text fontSize="14px">
              <Button
                as="a"
                cursor="pointer"
                leftIcon={GoLocation}
                variant="link"
                fontSize="14px"
                iconSpacing="4px"
                _hover={{ textDecor: "none" }}
              >
               {props.location}
              </Button>
            </Text>

            <Text fontSize="14px">
           
              <Button
                as="a"
                cursor="pointer"
                leftIcon={GoPerson}
                variant="link"
                fontSize="14px"
                iconSpacing="4px"
                _hover={{ textDecor: "none" }}
              >
              {props.company}
              </Button>
            </Text>
                        <Text fontSize="14px" color="gray.600">
              <Button
                as="a"
                cursor="pointer"
                leftIcon={GoOrganization}
                variant="link"
                fontSize="14px"
                iconSpacing="2px"
                _hover={{ textDecor: "none" }}
              >{props.followers} followers &middot;{props.following} following </Button>
              
            </Text>
          </Stack>
        </Box>
      </Flex>
      <Image
        src={props.avatar_url}
        w={"105px"}
        h={"105px"}
        rounded="100%"
      />
    </Flex>
  );
}
