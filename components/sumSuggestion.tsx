import { Text } from "@mantine/core";

const SumSuggestion = ({gamestate}:{gamestate:string}) => {
  // We will need to make this page show what is best for sum at each of the game states that can be passed in
  return (
    <div>
      <Text>Summoning Suggestion Page, {gamestate}</Text>
    </div>
  )
};

export default SumSuggestion;