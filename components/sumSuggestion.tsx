import { Text } from "@mantine/core";

const SumSuggestion = ({gamestate}:{gamestate:string}) => {
  const preBoss = (
    <div>
      <Text>Before you have killed any bosses it is reccomended to just use whatever you find as there in limited things you have access to, however if you are looking for something I heard that you could get something from the giant trees roots</Text>
    </div>
  )

  const preHardmode = (
    <div>
      <Text>Once you have started to kill some bosses you will get a lot more loot very quickly. The first thing you can look for a a summoner is the queen bee. Your other option before entering hardmode is obsidian armour. You will also want a whip to use, you can get one from materials in the jungle or with bones</Text>
    </div>
  )

  const preMech = (
    <div>
      <Text>
        Now that you are in hardmode you get access to a lot of very good loot, the first thing you should do is look for a spider cave as they are not to hard to kill and can give you good stuff to start in hardmode. The next thing to look for is to fish in the ocean whenever you have a blood moon, it could be helpful to make a box with a campfire to sit in while fishing to stay safe from what you may fish up.
      </Text>
    </div>
  )

  const prePlantara = (
    <div>
      <Text>
        After beating the mech bosses you gain hallowed armour to use which can help a lot with staying alive along with the new whip it comes with. If you got the summon from fishing in the blood moon you can keep using that as it is very reliable. If you didnt get it you can make a better one, take some souls of sight to the guide and see what you can make.
      </Text>
    </div>
  )

  const preLunar = (
    <div>
      <Text>
        After beating Plantara a lot opens up for you. First you can go talk to the witch doctor and see what they have for you. You can now go into the duengon again and get more drops from new enimes there, we are looking for ectoplasam and a whip. You can also now fight the pumpkin moon and empress of light which both give many good drops. Fighting empress at day time is VERY hard but gives you one of the best summons in the game
      </Text>
    </div>
  )

  const endGame = (
    <div>
      <Text>
        After beating moonlord there is not much left, you can get stardust armour as well as trying empress at day time now to get that summon.
      </Text>
    </div>
  )
  // We will need to make this page show what is best for sum at each of the game states that can be passed in
  return (
    <div>
      <Text>Summoning Suggestion Page, {gamestate}</Text>
      {gamestate === 'PreBoss' && preBoss}
      {gamestate === 'PreHardmode' && preHardmode}
      {gamestate === 'PreMech' && preMech}
      {gamestate === 'PrePlantara' && prePlantara}
      {gamestate === 'PreLunar' && preLunar}
      {gamestate === 'EndGame' && endGame}
    </div>
  )
};

export default SumSuggestion;