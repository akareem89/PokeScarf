import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { RouterStoreContext } from '../stores/RouterStore';

interface Props { }

export const TeamPage: React.FC<Props> = () => {
  const routerStore = React.useContext(RouterStoreContext)
  return (
    <View>
      <Text>My Teams</Text>
      <Button title="Battle 1 V 1" onPress={() => { routerStore.screen = "Battle1v1Page" }}></Button>
    </View>
  );
}