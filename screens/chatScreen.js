import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Pressable,
    Touchable, 
    FlatList,
    TextInput
} from 'react-native';



const ChatScreen = ({ navigation }) => {
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
    return(
       <View style={styles.screenContainer}>
            <View style={styles.messageContainer}>
            <Image source={{uri: 'https://randomuser.me/api/portraits/women/32.jpg'}} style={styles.userImagePlaceholder}/>
                <View style={styles.chatBubbleContainer}>
                    <View style={styles.messageTextCotainer}>
                        <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis diam in nulla semper consectetur. Quisque ante quam, molestie in elit id, dignissim auctor urna.
                        </Text>
                    </View>
                    <View style={styles.timestampContainer}>
                        <Text style={styles.timestampTxt}>
                            9:28 PM
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.replayMessageContainer}>
                <View style={styles.replayBubbleContainer}>
                    <View style={styles.messageTextCotainer}>
                        <Text>
                        Lorem ipsum dolor sit amet,
                        </Text>
                    </View>
                    <View style={styles.timestampContainer}>
                        <Text style={styles.timestampTxt}>
                            9:28 PM
                        </Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.textinputContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Write your message"
                />
            </View>
       </View>
    )
}
const styles = StyleSheet.create({
    screenContainer:{
      flex: 1,
      backgroundColor: '#F3F6FA'
    },
    messageContainer:{
        width: '80%',
        flexDirection: 'row',
        marginLeft: '5%',
        marginTop: '5%'
    },
    userImagePlaceholder:{
        width: 50,
        height: 50,
        backgroundColor: '#bbb',
        borderRadius: 100,  
    },
    chatBubbleContainer:{
        marginLeft: '2.5%',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderTopLeftRadius: 0
    },
    messageTextCotainer:{
        width: '90%',
        marginLeft: '5%',
        marginTop: '5%',
    },
    timestampContainer:{
        width: '95%',
        height: 25,
    },
    timestampTxt:{
        alignSelf: 'flex-end',
        fontSize: 10,
    },
    replayMessageContainer:{
        width: '70%',
        marginTop: '5%',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    replayBubbleContainer:{
        backgroundColor: '#FCF7EE',
        borderWidth: 1,
        borderColor: '#F6E7C4',
        borderRadius: 20,
        borderBottomRightRadius: 0,
        marginRight: '5%',
    },
    textinputContainer:{
        width: '100%',
        height: '10%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff'
    },
    textInput:{
        width: '90%',
        height: '100%',
        backgroundColor: '#fff'
    }
})

export default ChatScreen;