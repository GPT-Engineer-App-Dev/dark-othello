// Complete the Index page component here
// Use chakra-ui
import { Heading, VStack, Box, Text, Image, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={8} align="stretch">
      <Heading as="h1" size="2xl" textAlign="center">
        Othello Board Game
      </Heading>

      <Box p={4}>
        <Flex>
          <Box>
            <Heading as="h2" size="xl">
              About
            </Heading>
            <Text>Othello is a strategy board game for two players, played on an 8 by 8 square grid. The game pieces are discs that are black on one side and white on the other. The goal is to have the majority of your color discs on the board at the end of the game. Players take turns placing discs on the board. A player must place their disc in a position that "outflanks" one or more of the opponent's discs. Outflanking means to place a disc on the board so that your opponent's row (or rows) of discs is bordered at each end by a disc of your color. After placing the disc, the outflanked discs are flipped over to the player's color. The game ends when neither player can make a valid move. The player with the most discs on the board at the end wins the game.</Text>
          </Box>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Index;
