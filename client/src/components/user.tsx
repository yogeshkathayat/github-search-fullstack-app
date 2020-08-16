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
export function User() {
  return (
    <Flex borderWidth={1} rounded="5px" bg="white" alignItems="center" p="15px">
      <Flex flex={1} flexDir="column">
        <Flex mb="15px">
          <Box ml="10px">
            <Heading fontSize="16px">Yogesh Kathayat </Heading>
            {/* <Text fontSize="13px"> view profile </Text> */}
            <Link
              fontSize="13px"
              href="https://github.com/yogeshkathayat"
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
                dubai
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
                mauqah
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
              >4 Followers &middot; 5 following </Button>
              
            </Text>
          </Stack>
        </Box>
      </Flex>
      <Image
        src="https://avatars0.githubusercontent.com/u/18413467?s=460&u=f9d95e3568f4bd20b2eee96d7993830c80c5c42e&v=4"
        w={"105px"}
        h={"105px"}
        rounded="100%"
      />
    </Flex>
  );
}
