// Complete the Index page component here
// Use chakra-ui
import { Heading, VStack, Box, Text, Image, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={8} align="stretch">
      <Heading as="h1" size="2xl" textAlign="center">
        Othello
      </Heading>

      <Box p={4}>
        <Flex>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Othello_and_Desdemona_by_Daniel_Maclise.jpg" alt="Othello and Desdemona" objectFit="cover" width="300px" height="auto" mr={4} />
          <Box>
            <Heading as="h2" size="xl">
              About Othello
            </Heading>
            <Text>Information about the Shakespearean play Othello will be added here.</Text>
          </Box>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Index;
