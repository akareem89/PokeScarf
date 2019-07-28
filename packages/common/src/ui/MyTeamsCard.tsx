import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PokemonTeam } from '../modules/MyObjects';
import { SelectedTeamStoreContext } from '../stores/SelectedTeamStore';
import { TeamIcons } from './TeamIcons';

interface Props {
  teams: PokemonTeam[];
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topRowText: {
    fontSize: 16
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

export const MyTeamsCard: React.FC<Props> = ({ teams }) => {
  const selectedTeamStore = React.useContext(SelectedTeamStoreContext)

  return (
    <View style={styles.card}>

      <View style={styles.topRow}>
        <Text style={styles.topRowText}>My Teams</Text>
      </View>

      <View style={styles.bottomRow}>
        {teams.map((current_team) => {
          return <TeamIcons key={current_team.name} team={current_team} />
        })}
      </View>
    </View>
  );
}