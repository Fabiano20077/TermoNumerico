import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pagina/home';
import Inicio from './src/pagina/inicio';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>

          <Stack.Screen name='Inicio' component={Inicio}
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen name='Home' component={Home}
          options={{
            headerShown: false
          }}
          />

      </Stack.Navigator>

    </NavigationContainer>
  );
}