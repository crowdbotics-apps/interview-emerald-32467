import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Pressable,
    Touchable, 
    FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Entypo';

const DashboardScreen = ({ navigation }) => {

  
  return (
    <View style={styles.screenContainer}>
      <Pressable onPress={()=> navigation.navigate('ChatScreen')} style={styles.chatItemContainer}>
          <Image source={{uri: 'https://randomuser.me/api/portraits/women/32.jpg'}} style={styles.imagePlaceholder}/>
          <View style={styles.userInfoContainer}> 
            <View style={styles.userInfoTopHalf}> 
              <Text style={styles.usernameTxt}>
                Elmer James
              </Text>
              <Text style={styles.messageTimeTxt}> 
                6:58 PM
              </Text>
            </View>
            <View style={styles.userInfoBottomHalf}>
              <Text style={styles.messageTxt} numberOfLines={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis diam in nulla semper consectetur. Quisque ante quam, molestie in elit id, dignissim auctor urna.
              </Text>
            </View>
          </View>
      </Pressable>
      <View style={styles.tabnavigatorPlaceholder}>
        <View style={styles.tabnavigatorItem}> 
          <Text>
            <Icon name="home" size={24} color="#DA7F57" />
          </Text>
          <Text style={styles.tabnavigationLabel}>
            Dashboard
          </Text>
        </View>
        <View style={styles.tabnavigatorItem}> 
          <Text>
            <Icon name="calendar" size={24} color="#294249" />
          </Text>
          <Text style={styles.tabnavigationLabel}>
            Calendar
          </Text>
        </View>
        <View style={styles.tabnavigatorItem}> 
          <Text>
            <Icon name="video-camera" size={24} color="#294249" />
          </Text>
          <Text style={styles.tabnavigationLabel}>
            Video
          </Text>
        </View>
        <View style={styles.tabnavigatorItem}> 
          <Text>
            <Icon name="chat" size={24} color="#294249" />
          </Text>
          <Text style={styles.tabnavigationLabel}>
            Chat
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer:{
    flex: 1,
    backgroundColor: '#FDFDFE'
  },
  tabnavigatorPlaceholder:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%',
    backgroundColor: '#fff',
    elevation: 5,
    flexDirection:'row'
  },
  tabnavigatorItem:{
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabnavigationLabel:{
    fontSize: 10
  },
  chatItemContainer:{
    width: '100%',
    height: '15%',
    borderWidth: 0.25,
    borderColor: '#ededed',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imagePlaceholder:{
    width: 60,
    height: 60,
    backgroundColor: '#bbb',
    borderRadius: 100,
    marginLeft: '2.5%'
  },
  userInfoContainer:{
    width: '75%',
    height: '80%',
    marginLeft: '5%',
  },
  userInfoTopHalf:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameTxt:{
    marginTop: '2.5%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageTimeTxt:{
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
    color: '#adadad',
  },
  userInfoBottomHalf:{
    width: '85%',
    marginTop: '5%'
  },
  messageTxt:{
    color: '#adadad',
  },
  
})

export default DashboardScreen;
