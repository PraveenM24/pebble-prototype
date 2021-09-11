import React from 'react'
import { View, Text, } from 'react-native';
import { Icon } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import UpcomingAppointments from './Components/UpcomingAppointments'
import CompletedAppointments from './Components/CompletedAppointments'

const Tab = createMaterialTopTabNavigator();

export default function App({userID, navigation}) {
  return (
      <>
        <Tab.Navigator>
          <Tab.Screen name="Upcoming">
            {props => <UpcomingAppointments userID={userID} navigation={navigation} />}
          </Tab.Screen>
          <Tab.Screen name="Completed">
            {props => <CompletedAppointments userID={userID} navigation={navigation} />}
          </Tab.Screen>
        </Tab.Navigator>
      </>
  );
}
