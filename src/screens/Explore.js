import React from 'react'
import { StyleSheet, Text, View, FlatList,ScrollView } from 'react-native'
import Header from'../components/Header'
import Card from "../components/Card";
import { useSelector } from "react-redux";

const LittleCard = ({name}) => {
    const cardData = useSelector(state=>{
        return state
    })
    return (
        <View style={styles.littleCardContainer}>
            <Text style={styles.LittleCardText}>{name}</Text>
        </View>
    )
}

const Explore = () => {
    const cardData = useSelector(state=>{
        return state
    })
    return (
        <View style={styles.ExploreContainer}>
            <Header/>
            <ScrollView>
            <View style={styles.CardPack}>
                <LittleCard name="Gaming"/>
                <LittleCard name="Trending"/>
                <LittleCard name="News"/>
                <LittleCard name="Music"/>
                <LittleCard name="Movies"/>
                <LittleCard name="Fashion"/>
            </View>
            <Text style={styles}>
                Trending Videos
            </Text>
            <FlatList
            data={cardData}
            renderItem={({item})=>{
                return <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.changeTitle}
                />
            }}
            keyExtractor={item=>item.id.videoId}
            />
            </ScrollView>
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    littleCardContainer:{
        backgroundColor:"red",
        height:50,
        width:180,
        borderRadius:4,
        marginTop:10,
    },
    LittleCardText:{
        textAlign:'center',
        color:'white',
        fontSize:22,
        marginTop:5,
    },
    ExploreContainer:{
        flex:1,
    },
    CardPack:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:'space-around',
    }
})
