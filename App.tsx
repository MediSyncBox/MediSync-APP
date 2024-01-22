import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva'; // Import Eva Design System

const { Navigator, Screen } = createBottomTabNavigator();

function UsersScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1'>USERS</Text>
    </Layout>
  );
}

function OrdersScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1'>ORDERS</Text>
    </Layout>
  );
}

function AccountScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1'>ACCOUNT</Text>
    </Layout>
  );
}

function BottomTabBar({ navigation, state }) {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='USERS'/>
      <BottomNavigationTab title='ORDERS'/>
      <BottomNavigationTab title='ACCOUNT'/>
    </BottomNavigation>
  );
}

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <Navigator tabBar={props => <BottomTabBar {...props} />} >
              <Screen name='Users' component={UsersScreen}/>
              <Screen name='Orders' component={OrdersScreen}/>
              <Screen name='Accounts' component={AccountScreen}/>
            </Navigator>
          </NavigationContainer>
        </ApplicationProvider>
  );
}

export default App;
