import * as React from 'react';
import { useContext } from 'react';
import { Button, View } from 'react-native';
import { RouterStoreContext } from '../stores/RouterStore';
import { SelectedTeamStoreContext } from '../stores/SelectedTeamStore';
import { MyTeamsCard } from '../ui/MyTeamsCard';
import { SelectedTeam } from '../ui/SelectedTeam';
import { Pokemon, PokemonTeam } from './MyObjects';

interface Props { }

export const TeamPage: React.FC<Props> = () => {
  const routerStore = React.useContext(RouterStoreContext)

  let newTeam = [new Pokemon('charizard'),
  new Pokemon('mewto'),
  new Pokemon('greninja'),
  new Pokemon('caterpie'),
  new Pokemon('hitmonchan'),
  new Pokemon('kyurem(white)')]

  let all_teams = [new PokemonTeam("Team 1", newTeam),
  new PokemonTeam("Team 2", newTeam),
  new PokemonTeam("Team 3", newTeam),
  new PokemonTeam("Team 4", newTeam),
  new PokemonTeam("Team 5", newTeam),
  new PokemonTeam("Team 6", newTeam)
  ]

  const selectedTeamStore = useContext(SelectedTeamStoreContext);

  console.log("Selected Team: " + selectedTeamStore.currentTeam)

  return (
    <View>
      <View>
        <MyTeamsCard teams={all_teams} />
        {/* <Text>Hi from PokeScarf!</Text> /> */}
      </View>
      <View>
        <SelectedTeam />
      </View>
      <Button title="Battle 1 V 1" onPress={() => { routerStore.screen = "Battle1v1Page" }}></Button>
    </View>

  );
}