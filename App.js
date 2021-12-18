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
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
          headerLeft: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
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
            <Button
              title="Info"
              color="#fff"
            />
          ),
          headerLeft: () => (
            <Button
              onPress={()=> navigation.navigate('Home')}
              title="Info"
              color="#fff"
            />
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
