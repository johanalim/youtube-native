import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/core';

export default function Header() {
    const navigation = useNavigation() 
    return (
        <View style={styles.header}>
            <View style={styles.title}>
                <AntDesign style={styles.logo} name="youtube" size={32} color="red"/>
                <Text style={styles.text}>Youtube</Text>
            </View>
            <View style={styles.sidelogo}>
                <Ionicons 
                name="md-videocam" 
                size={32} 
                color={mycolor}/>
                <Ionicons 
                name="md-search" 
                size={32} 
                color={mycolor}
                onPress={()=>navigation.navigate("search")}/>
                <MaterialIcons name="account-circle" size={32} color={mycolor}/>
            </View>
        </View>
    )
}
const mycolor = "#212121"

const styles = StyleSheet.create({
    header:{
        marginTop:Constant.statusBarHeight,  
        height:45,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:'space-between',
        elevation:4,
        shadowOffset:{ width:0, height:1,},
        shadowColor:'grey',
        shadowOpacity:1.0,
    },
    title:{
        flexDirection:"row",
        margin:5,
    },
    text:{
        fontSize:22,
        marginLeft:5,
        fontWeight:'bold',
    },
    logo:{
        marginLeft:20,
    },
    sidelogo:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:150,
        margin:5,
    }
});