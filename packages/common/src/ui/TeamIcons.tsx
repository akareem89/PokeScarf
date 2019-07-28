import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PokemonTeam } from '../modules/MyObjects';
import { SelectedTeamStoreContext } from '../stores/SelectedTeamStore';

interface Props {
  team: PokemonTeam;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: 'column',
    padding: 7,
    width: '35%',
    margin: 5
  },
  teamName: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  teamNameText: {
    fontSize: 16
  },
  pokemonTeam: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
});

export const TeamIcons: React.FC<Props> = ({ team }) => {
  const selectedTeamStore = useContext(SelectedTeamStoreContext)

  const pressed = () => {
    selectedTeamStore.currentTeam = team
    console.log("PRESSED: " + selectedTeamStore.currentTeam.name)
  }

  const baseUrl = "../res/"

  return (

    <View style={styles.card}>
      <TouchableOpacity onPress={pressed}>
        <View style={styles.pokemonTeam}>
          {team.pokemonList.map((pokemon) => {
            var path = (baseUrl + pokemon.icon)
            // var icon = require(path)
            // console.log(icon)
            console.log(path)
            // return <img key={team.name + ":" + pokemon.name} src={require(path)} alt="Logo" />
            return <img key={team.name + ":" + pokemon.name} src={path} alt="Logo" />
          })}
        </View>
        <View style={styles.teamName}>
          <Text style={styles.teamNameText}>{team.name}</Text>
        </View>
      </TouchableOpacity>
    </View>



  );
}