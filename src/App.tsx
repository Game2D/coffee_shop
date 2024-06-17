import React from 'react';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './Onboarding';
import Layout from './Tabs/Layout';
import Detail from './Detail';
import Order from './Order';
import Delivery from './Delivery';
import YaMap from 'react-native-yamap';

YaMap.init('0a8f00c0-9d95-46b1-a98f-fbfd16e7de5c');

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Tabs" component={Layout} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Detail" component={Detail} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Order" component={Order} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Delivery" component={Delivery} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
