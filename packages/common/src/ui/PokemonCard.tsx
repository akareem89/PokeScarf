import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pokemon } from '../modules/MyObjects';

interface Props {
  pokemon: Pokemon;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 7,
    margin: 5
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameRowText: {
    fontSize: 12
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  circle: {
    borderRadius: 50,
    backgroundColor: '#8FB299',
    padding: 21
  }
});

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {

  const baseUrl = "../res/"
  var path = (baseUrl + pokemon.pic)

  return (
    <View style={styles.card}>

      <img src={path} alt="Logo" />

      <View style={styles.nameRow}>
        <Text style={styles.nameRowText}>{pokemon.name}</Text>
      </View>



    </View>
  );
}