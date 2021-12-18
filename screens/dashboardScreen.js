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
                perfect! 👏 perfect! 👏 perfect! 👏 perfect! 
              </Text>
            </View>
          </View>
      </Pressable>
      <View style={styles.tabnavigatorPlaceholder}>
        <View style={styles.tabnavigatorItem}> 

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
    backgroundColor: '#bbb'
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
