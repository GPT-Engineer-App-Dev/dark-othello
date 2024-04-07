// Complete the Index page component here
// Use chakra-ui
import { Heading, VStack, Box, Text, Image, Flex, OrderedList, ListItem } from "@chakra-ui/react";

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

      <Box p={4}>
        <Heading as="h2" size="xl">
          Basic Rules
        </Heading>
        <OrderedList>
          <ListItem>Black always moves first.</ListItem>
          <ListItem>If a player cannot outflank and flip at least one opposing disc, they must pass their turn.</ListItem>
          <ListItem>A disc may outflank any number of discs in one or more rows in any direction (horizontal, vertical, diagonal).</ListItem>
          <ListItem>Players may not skip over their own color disc to outflank an opposing disc.</ListItem>
          <ListItem>Disc(s) may only be outflanked as a direct result of a move and must fall in the direct line of the disc placed down.</ListItem>
          <ListItem>All discs outflanked in any one move must be flipped, even if it is to the player's advantage not to flip them.</ListItem>
          <ListItem>A player who flips a disc which should not have been turned may correct the mistake as long as the opponent has not made a subsequent move. If the opponent has already moved, it is too late to change and the disc(s) remain as is.</ListItem>
          <ListItem>Once a disc is placed on a square, it can never be moved to another square later in the game.</ListItem>
          <ListItem>If a player runs out of discs, but still has opportunities to outflank an opposing disc, then the opponent must give the player a disc to use.</ListItem>
          <ListItem>When it is no longer possible for either player to move, the game is over. Discs are counted and the player with the majority of their color showing is the winner.</ListItem>
        </OrderedList>
      </Box>
    </VStack>
  );
};

export default Index;
