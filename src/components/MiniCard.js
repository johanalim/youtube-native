import React from 'react'
import { Dimensions, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const MiniCard = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}>
        <View style={styles.container}>
            <Image
            source={{uri:`http://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`}}
            style={styles.cardImage}
            />
            <View style={styles.cardContainer}>
                <Text 
                style={styles.cardText}
                ellipsizeMode="tail"
                numberOfLines={3}
                >{props.title}
                </Text>
                <Text>{props.channel}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default MiniCard

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        marginBottom:0,
    },
    cardImage:{
        width:"45%",
        height:100,
    },
    cardContainer:{
        paddingLeft:7,
    },
    cardText:{
        fontSize:17,
        width:Dimensions.get("screen").width/2
    }
})
