import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <View><Text>Home</Text></View>;
}

function SettingsScreen() {
  return <View><Text>Settings</Text></View>;
}

function ProfileScreen() {
  return <View><Text>Profile</Text></View>;
}

function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = 'home-outline';
      } else if (route.name === 'Settings') {
        iconName = 'settings-outline';
      } else if (route.name === 'Profile') {
        iconName = 'person-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#80bfff',  
    tabBarInactiveTintColor: 'gray',  
    tabBarStyle: [{ display: "flex" }, null],
  })}
>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Settings" component={SettingsScreen} />
  <Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>


    </NavigationContainer>
  );
}

export default App;
