import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Blogs"
            component={IndexScreen}
            options={({navigation}) => ({
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Create')}
                  title="Add"
                  color="red"
                />
              ),
            })}
          />
          <Stack.Screen name="Post" component={ShowScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
