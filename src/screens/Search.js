import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";
import Constant from 'expo-constants';

import { useSelector, useDispatch } from 'react-redux'

const Search = ({navigation}) => {
        const[value,setValue] = useState("")
        //const [miniCardData, setMiniCard] = useState([])
        const dispatch = useDispatch()
        const miniCardData=useSelector(state=>{
            return state
        })
        const [loading,setLoading] = useState(false)
        const fetchData = () =>{
            setLoading(true)
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyCPxWyjby5DvV-XZbT78nlQxzEjO0cqp2c`)
            .then(res=>res.json())
            .then(data=>{
                setLoading(false)
                dispatch({type:"add",payload:data.items})
                //setMiniCard(data.items)
            })
        }
    return (
        <View style={styles.SearchBar}>
            <View style={styles.SearchIcon}>
                <Ionicons 
                name="md-arrow-back" 
                size={32}
                onPress={()=>navigation.goBack()}/>
                <TextInput 
                style={styles.SearchText} 
                value={value} onChangeText={(text)=>setValue(text)}/>
                <Ionicons 
                onPress={()=>fetchData()} 
                name="md-send" 
                size={32}/>
            </View>
            {/*
            <ScrollView>
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
            </ScrollView>
            */}
            {loading ? <ActivityIndicator size="large" color="red"/>:null}
            <FlatList
            data={miniCardData}
            renderItem={({item}) => {
                return <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                />
            }}
            keyExtractor={item=>item.id.videoId}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    SearchBar:{
        flex:1,
        marginTop:Constant.statusBarHeight,
    },
    SearchIcon:{
        padding:5,
        flexDirection:'row',
        justifyContent:'space-around',
        elevation:5,
        backgroundColor:"white",
    },
    SearchText:{
        width:"70%",
        backgroundColor:"#e6e6e6"
    }
})
