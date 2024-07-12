import React from "react";
import { Box, Text } from "@chakra-ui/react";

const LandingFooter = () => (
      <Box
            as="footer"
            py={4}
            textAlign="center"
            bgGradient={`linear(to-b, transparent, white)`}
            backgroundColor={"rgba(0, 0, 0, 0)"}
            color="#213951"
      >
            <Text>Made with ❤️ for an internship at PearlThoughts 🌟</Text>
      </Box>
);

export default LandingFooter;
