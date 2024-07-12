import React from "react";
import LandingHeader from "./LandingHeader";
import LandingFooter from "./LandingFooter";
import { Box, Button, VStack, Text } from "@chakra-ui/react";
import bgImage from "../../public/landing-img.png";

const LandingPage = () => {
      return (
            <Box
                  position="relative"
                  minHeight="100vh"
                  bgImage={`url(${bgImage.src})`}
                  bgSize="cover"
                  bgPosition="center"
                  display="flex"
                  flexDirection="column"
            >
                  <Box position="relative" zIndex="1">
                        <LandingHeader />
                  </Box>
                  <Box
                        flex="1"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        textAlign="left"
                        px={8}
                        zIndex="0"
                        color="#213951"
                        ml={8}
                  >
                        <VStack spacing={20} align="flex-start">
                              <h1 className="text-6xl">
                                    Inspiring Stories
                                    <br />
                                    &
                                    <br />
                                    Ideas
                              </h1>
                              <Text fontSize="lg" width={"60%"}>
                                    Dive into a world of inspiring stories and groundbreaking ideas
                                    that will change your perspective.
                              </Text>
                              <Button
                                    color={"white"}
                                    bg="#f6828c"
                                    _hover={{ bg: "#213951" }}
                                    size="lg"
                              >
                                    Start Reading
                              </Button>
                        </VStack>
                  </Box>
                  <Box position="relative" zIndex="1" mt="auto">
                        <LandingFooter />
                  </Box>
            </Box>
      );
};

export default LandingPage;
