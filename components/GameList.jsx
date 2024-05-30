import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button, List } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const GameList = () => {
  return (
    <View style={styles.container}>
        <View style={styles.itemContainer}>
            <Image source = {require('../assets/images/god-of-war.jpeg')} style={styles.imageContainer}/>
            <View>
                <Text style = { styles.textTitle}>title</Text>
                <Text style = { styles.textGame}>game name</Text>
            </View>
        </View>
        <Button style={styles.buttonContainer} mode='contained-tonal' buttonColor='#0aada8' compact={true} labelStyle={styles.textButton} >Play</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:20,

    },
    itemContainer : {
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },

    imageContainer: {
        width: 55,
        height: 55,
        borderRadius: 10,
        marginRight: 8
    },
    buttonContainer: {
        padding: 10,
        width: 100,
        borderRadius:10,
    },

    textButton : {
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "bold",
        fontFamily: "Roboto"
    },

    textTitle: {
        fontSize: 14,
        fontWeight: "100",
        fontFamily: "serif"
    },

    textGame: {
        fontSize: 16,
        fontWeight: "200",
        fontFamily: "sans-serif"
    },

})

export default GameList