"use client";
import React, { useState } from "react";
import {
      Box,
      Button,
      FormControl,
      FormLabel,
      Input,
      Textarea,
      Select,
      Heading,
      VStack,
      useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const NewArticle = () => {
      const [title, setTitle] = useState("");
      const [content, setContent] = useState("");
      const [excerpt, setExcerpt] = useState("");
      const [status, setStatus] = useState("Draft");
      const [categories, setCategories] = useState("");
      const [tags, setTags] = useState("");
      const router = useRouter();
      const toast = useToast();

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const articleData = {
                  title,
                  content,
                  excerpt,
                  status,
                  categories: categories.split(",").map((category) => category.trim()),
                  tags: tags.split(",").map((tag) => tag.trim()),
            };

            const response = await fetch("http://localhost:1337/articles", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Assuming you have JWT stored in localStorage
                  },
                  body: JSON.stringify(articleData),
            });

            if (response.ok) {
                  toast({
                        title: "Article created.",
                        description: "Your article has been successfully created.",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                  });
                  router.push("/");
            } else {
                  toast({
                        title: "Error creating article.",
                        description: "There was an error creating your article.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                  });
            }
      };

      return (
            <Box
                  minH="100vh"
                  bg="gray.100"
                  py="10"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
            >
                  <Heading as="h1" size="xl" mb="8">
                        Create New Article
                  </Heading>
                  <Box
                        as="form"
                        onSubmit={handleSubmit}
                        bg="white"
                        p="6"
                        rounded="md"
                        shadow="md"
                        width="full"
                        maxW="lg"
                  >
                        <VStack spacing="4">
                              <FormControl id="title" isRequired>
                                    <FormLabel>Title</FormLabel>
                                    <Input
                                          type="text"
                                          value={title}
                                          onChange={(e) => setTitle(e.target.value)}
                                    />
                              </FormControl>
                              <FormControl id="content" isRequired>
                                    <FormLabel>Content</FormLabel>
                                    <Textarea
                                          value={content}
                                          onChange={(e) => setContent(e.target.value)}
                                    />
                              </FormControl>
                              <FormControl id="excerpt">
                                    <FormLabel>Excerpt</FormLabel>
                                    <Textarea
                                          value={excerpt}
                                          onChange={(e) => setExcerpt(e.target.value)}
                                    />
                              </FormControl>
                              <FormControl id="status" isRequired>
                                    <FormLabel>Status</FormLabel>
                                    <Select
                                          value={status}
                                          onChange={(e) => setStatus(e.target.value)}
                                    >
                                          <option value="Draft">Draft</option>
                                          <option value="Published">Published</option>
                                    </Select>
                              </FormControl>
                              <FormControl id="categories">
                                    <FormLabel>Categories (comma-separated)</FormLabel>
                                    <Input
                                          type="text"
                                          value={categories}
                                          onChange={(e) => setCategories(e.target.value)}
                                    />
                              </FormControl>
                              <FormControl id="tags">
                                    <FormLabel>Tags (comma-separated)</FormLabel>
                                    <Input
                                          type="text"
                                          value={tags}
                                          onChange={(e) => setTags(e.target.value)}
                                    />
                              </FormControl>
                              <Button type="submit" colorScheme="blue" width="full">
                                    Create Article
                              </Button>
                        </VStack>
                  </Box>
            </Box>
      );
};

export default NewArticle;
