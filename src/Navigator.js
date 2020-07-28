import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from './homeScreens/HomeContainer';
import ProfileContainer from './profileScreens/ProfileContainer';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeContainer} />
        <Stack.Screen name="Profile" component={ProfileContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
