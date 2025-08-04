import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screens } from '../src/Screen/Pantalla1Screans';
import { Pantalla2Screens } from '../src/Screen/Pantalla2.Screans';

export type RootStackParams = {
  Pantalla1: undefined;
  Pantalla2: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 5,
        },
      }}
    >
      <Stack.Screen
        name="Pantalla1"
        component={Pantalla1Screens}
        options={{ title: 'Inicio' }}
      />
      <Stack.Screen
        name="Pantalla2"
        component={Pantalla2Screens}
        options={{ title: 'Inicio' }}
      />
    </Stack.Navigator>
  );
};
