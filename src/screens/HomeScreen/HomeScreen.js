import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import History from './Components/HistoryScreen/History'
import Profile from './Components/ProfileScreen/Profile'
import Departments from './Components/DoctorsScreen/Departments'
import Feed from './Components/FeedScreen/Feed'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Icon } from 'react-native-elements'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function HomeScreen({route, navigation}) {
  const userID = route.params.user.userID

  const [component, setComponent] = useState('Feed')
  const indicator = `&#8226;`
  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeContainer__top}></View>
      {
        component == 'Feed' ? (
          <Feed navigation= {navigation}/>
        ) : (
          component == 'Departments' ? (
            <Departments navigation= {navigation} userID={userID}/>
          ) : (
            component == 'History' ? (
              <History  navigation= {navigation} userID={userID}/>
            ) : (
              component == 'Profile' ? (
                <Profile navigation= {navigation} userID={userID}/>
              ) : (
                <></>
              )
            )
          )
        )
      }
      <View style={styles.homeContainer__nav}>
          <TouchableOpacity style={styles.homeContainer__iconContainer} onPress={() => setComponent('Feed')}>
            {component == 'Feed' ? <Text style={styles.homeContainer__iconIndicator}>&#8226;</Text> : <Text style={styles.homeContainer__iconIndicator}></Text> }
            <Icon
              type='material-community'
              name='home-variant-outline' 
              size={30}
              color= '#585ce5'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeContainer__iconContainer} onPress={() => setComponent('Departments')}>
          {component == 'Departments' ? <Text style={styles.homeContainer__iconIndicator}>&#8226;</Text> : <Text style={styles.homeContainer__iconIndicator}></Text> }
            <Icon
              type='material-community'
              name='doctor' 
              size={30}
              color= '#585ce5'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeContainer__iconContainer} onPress={() => setComponent('History')}>
          {component == 'History' ? <Text style={styles.homeContainer__iconIndicator}>&#8226;</Text> : <Text style={styles.homeContainer__iconIndicator}></Text> }
            <Icon
              type='material-community'
              name='calendar-clock' 
              size={30}
              color= '#585ce5'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeContainer__iconContainer} onPress={() => setComponent('Profile')}>
          {component == 'Profile' ? <Text style={styles.homeContainer__iconIndicator}>&#8226;</Text> : <Text style={styles.homeContainer__iconIndicator}></Text> }
            <Icon
              type='font-awesome'
              name='user-circle' 
              size={27}
              color= '#585ce5'/>
          </TouchableOpacity>
      </View>
        {/* <Tab.Navigator
          style={styles.homeContainer__nav}
          initialRouteName="Feed"
          tabBarOptions={{
          activeTintColor: '#585ce5',
          }}
        >
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          /> 
          <Tab.Screen
            name="Doctors"
            component={Departments}
            initialParams={{userID: userID}}
            options={{
              tabBarLabel: 'Doctors',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="hospital-box" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="History"
            component={History}
            initialParams={{userID: userID}}
            options={{
              tabBarLabel: 'Appoinments',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),   
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            initialParams={{userID: userID}}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator> */}
  </View>
  );
}
