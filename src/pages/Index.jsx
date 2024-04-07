// Complete the Index page component here
// Use chakra-ui
import { Heading, VStack, Box, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={8} align="stretch">
      <Heading as="h1" size="2xl" textAlign="center">
        Othello
      </Heading>

      <Box>
        <Heading as="h2" size="xl">
          About Othello
        </Heading>
        <Text>Information about the Shakespearean play Othello will be added here.</Text>
      </Box>
    </VStack>
  );
};

export default Index;
