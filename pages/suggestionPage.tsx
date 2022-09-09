import {
  Button,
  Center,
  Chip,
  Group,
  MediaQuery,
  Space,
  Title,
} from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import SumSuggestion from "../components/sumSuggestion";

const SuggestionPage: NextPage = () => {
  const [classValue, setClassValue] = useState("");
  const [gamestate, setGamestate] = useState("");

  return (
    <div>
      <Head>
        <title>Suggestion</title>
      </Head>

      <main>
          <MediaQuery
          largerThan={700}
            styles={{ position: "absolute", right: "0px" }}
          >
            <div>
              <Link href={"/"}>
                <Button fullWidth>Go back</Button>
              </Link>
            </div>
          </MediaQuery>
        <Group position="center">
          <Title order={1}>Suggestion Mode</Title>
        </Group>
        <Space h="lg" />
        <Center>
          <Title order={2}>Pick your class!</Title>
        </Center>
        <Space h="lg" />
        <Center>
          <Chip.Group
            position="center"
            multiple={false}
            value={classValue}
            onChange={setClassValue}
          >
            <Chip value="Melee">Melee</Chip>
            <Chip value="Ranged">Ranged</Chip>
            <Chip value="Magic">Magic</Chip>
            <Chip value="Summoning">Summoning</Chip>
          </Chip.Group>
        </Center>
        <Space h="lg" />
        <Space h="lg" />
        {classValue !== "" && (
          <>
            <Center>
              <Title order={2}>Pick your stage of the game</Title>
            </Center>
            <Center>
              <Chip.Group
                position="center"
                multiple={false}
                value={gamestate}
                onChange={setGamestate}
              >
                <Chip value="PreBoss">PreBoss</Chip>
                <Chip value="PreHardmode">PreHardmode</Chip>
                <Chip value="PreMech">Pre Mech Bosses</Chip>
                <Chip value="PrePlantara">Pre Plantara</Chip>
                <Chip value="PreLunar">Pre Lunar</Chip>
                <Chip value="EndGame">EndGame</Chip>
              </Chip.Group>
            </Center>
          </>
        )}
        {gamestate !== "" && (
          <div>
            will show suggestions here
            {classValue === "Magic" && <div>Mage</div>}
            {classValue === "Melee" && <div>Melee</div>}
            {classValue === "Ranged" && <div>Ranged</div>}
            {classValue === "Summoning" && <div><SumSuggestion gamestate={gamestate}/></div>}
          </div>
        )}
        {/*will render another component based on what was selected, ie: (<SuggestionMage gamestate={gamestate})} */}
      </main>
    </div>
  );
};

export default SuggestionPage;
