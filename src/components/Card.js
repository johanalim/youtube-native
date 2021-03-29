import { MaterialIcons } from "@expo/vector-icons";
import React from 'react'
import { StyleSheet, View, Image,Text, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Card = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
        onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}>
        <View 
        style={styles.CardContainer}
        
        >
            <Image
            source={{uri:`http://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`}} 
            style={styles.image}
            />
            <View style={styles.imageDesc}>
            <MaterialIcons name="account-circle" size={32} color="#212121"/>
                <View style={styles.imageDescContainer}>
                    <Text 
                    style={styles.imageDescText} 
                    ellipsizeMode='tail' 
                    numberOfLines={2}>{props.title}</Text>
                    <Text>{props.channel}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    CardContainer:{
        elevation:4,
        margin:10,
        marginBottom:10,
    },
    image:{
        width:"100%",
        height:200,
    },
    imageDesc:{
        flexDirection:'row',
        margin:5,
    },
    imageDescContainer:{
        marginLeft:10,
    },
    imageDescText:{
        fontSize:20,
        width:Dimensions.get("screen").width - 50,
    }
});

