import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Welcome from './pages/Welcome';
import Water from './pages/Water';

const Routes = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="Welcome" component={Welcome}/>
    <AppStack.Screen name="Water" component={Water}/>
  </AppStack.Navigator>
);

export default Routes;
