import 'react-native-gesture-handler';
import React, { useState, useEffect, useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import Map from './components/Map'
// import { useEffect, useState, useCallback} from 'react/cjs/react.production.min';

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{ backgroundColor: '#e64f4f'}}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='ios-home' size={22} color={color} />
            )
          }} 
        />
        <Tab.Screen 
          name="Explore" 
          component={Map}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='ios-map' size={22} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='ios-settings' size={22} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
