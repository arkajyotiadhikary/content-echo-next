import React from "react";
import Link from "next/link";
import {
      Box,
      Flex,
      Input,
      InputGroup,
      InputRightElement,
      Button,
      IconButton,
      Avatar,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAdd, faBell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
      return (
            <Box bg="white" backgroundColor={"rgba(0, 0, 0, 0)"} py={2}>
                  <Flex className="container mx-auto" justify="space-between" align="center" px={6}>
                        <Link href="/" passHref>
                              <Box as="a" fontSize="2xl" fontWeight="bold" color="gray.800">
                                    ContentEcho
                              </Box>
                        </Link>
                        <Box flex="1">
                              <InputGroup flex="1" mx={6} width={"50%"}>
                                    <Input placeholder="Search..." />
                                    <InputRightElement>
                                          <FontAwesomeIcon
                                                className="text-gray-400 h-4"
                                                icon={faMagnifyingGlass}
                                          />
                                    </InputRightElement>
                              </InputGroup>
                        </Box>
                        <Flex align="center space-x-2">
                              <Button mr={7}>
                                    <FontAwesomeIcon className=" h-4" icon={faAdd} />
                              </Button>
                              <Button mr={7}>
                                    <FontAwesomeIcon className=" h-4" icon={faBell} />
                              </Button>

                              <Avatar
                                    name="User Profile"
                                    src="https://bit.ly/broken-link"
                                    height={"40px"}
                                    width={"40px"}
                              />
                        </Flex>
                  </Flex>
            </Box>
      );
};

export default Header;
