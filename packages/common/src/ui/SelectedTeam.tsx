import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SelectedTeamStoreContext } from '../stores/SelectedTeamStore';
import { PokemonCard } from './PokemonCard';

interface Props {
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 7,
    margin: 5
  },
  topRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topRowText: {
    fontSize: 16
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
});



export const SelectedTeam: React.FC<Props> = observer(() => {

  const selectedTeamStore = useContext(SelectedTeamStoreContext);

  const currentTeam = selectedTeamStore.currentTeam

  console.log("Selected Team: " + currentTeam)

  return (
    selectedTeamStore.currentTeam ? <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.topRowText}>{selectedTeamStore.currentTeam.name}</Text>
      </View>

      <View>
        {currentTeam.pokemonList.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={currentTeam.name + pokemon.name} />
        })}
      </View>
    </View>
      :
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.topRowText}>No Team Selected</Text>
        </View>
      </View>
  )

  // return (
  //   <View style={styles.card}>
  //     <View style={styles.topRow}>
  //       <Text style={styles.topRowText}>{selectedTeamStore.currentTeam ? selectedTeamStore.currentTeam.name : "No Team Selected"}</Text>
  //     </View>


  //     <View>
  //       {currentTeam.pokemonList.map((pokemon) => {
  //         return <PokemonCard pokemon={pokemon} />
  //       })}
  //     </View>
  //   </View>
  // );
});