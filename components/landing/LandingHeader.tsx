import React from "react";
import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";

const LandingHeader = () => {
      return (
            <Box
                  bgGradient="linear(to-t, transparent, white)"
                  py={2}
                  backgroundColor="rgba(0, 0, 0, 0)"
            >
                  <Flex className="container mx-auto" justify="space-between" align="center" px={6}>
                        <Link href="/" passHref>
                              <Box as="a" fontSize="2xl" fontWeight="bold" color="#213951">
                                    ContentEcho
                              </Box>
                        </Link>

                        <Flex align="center">
                              <Link
                                    href={{
                                          pathname: "/auth",
                                          query: {
                                                isSignIn: true,
                                          },
                                    }}
                                    passHref
                              >
                                    <Box
                                          as="a"
                                          fontSize="sm"
                                          fontWeight="bold"
                                          color="#213951"
                                          mr={7}
                                    >
                                          Sign in
                                    </Box>
                              </Link>
                              <Link
                                    href={{
                                          pathname: "/auth",
                                          query: {
                                                isSignIn: false,
                                          },
                                    }}
                                    passHref
                              >
                                    <Box
                                          as="a"
                                          bgColor="#f6828c"
                                          color="white"
                                          px={4}
                                          py={2}
                                          rounded="lg"
                                          _hover={{ bg: "#213951" }}
                                    >
                                          Get Started
                                    </Box>
                              </Link>
                        </Flex>
                  </Flex>
            </Box>
      );
};

export default LandingHeader;
