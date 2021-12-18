import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Pressable,
    Touchable,
    Button,
    BackHandler
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Entypo';

import { Provider } from "react-redux"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"


import DashboardScreen from './screens/dashboardScreen';
import ChatScreen from './screens/chatScreen';

const Stack = createStackNavigator()

const App = ({ navigation }) => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          headerTitle: 'CHAT HISOTRY',
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={({marginRight: 10})}>
            <Text style={styles.linkIcon}>
              <Icon name="plus" size={20} color="#9A9891" />
            </Text>
          </View>
          ),
          headerLeft: () => (
            <View style={({marginLeft: 10})}>
              <Text style={styles.linkIcon}>
                <Icon name="chevron-left" size={20} color="#9A9891" />
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerTitle: 'ELMER JAMES',
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={({marginRight: 10})}>
              <Text style={styles.linkIcon}>
                <Icon name="dots-three-vertical" size={20} color="#9A9891" />
              </Text>
            </View>
          ),
          headerLeft: () => (
            <View style={({marginLeft: 10})}>
              <Text style={styles.linkIcon}>
                <Icon name="chevron-left" size={20} color="#9A9891" />
              </Text>
            </View>
          ),
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screenContainer:{
    flex: 1,
    backgroundColor: '#bbb'
  }
})

export default App
