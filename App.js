import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import {BlogProvider} from './src/context/BlogContext';

const Stack = createStackNavigator();

function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Blogs" component={IndexScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

export default App;