import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const GameList = ({picture, title, info, isFree, price, onPress}) => {
  return (
    <View style={styles.container}>
        <View style={styles.itemContainer}>
            <Image source = {picture} style={styles.imageContainer} />
            <View>
                <Text style = { styles.textTitle}>{info}</Text>
                <Text style = { styles.textGame}>{title}</Text>
            </View>
        </View>
        <Button onPress={onPress} style={styles.buttonContainer} mode='contained-tonal' contentStyle= {styles.textPosition} buttonColor='#0aada8' compact={true} labelStyle={styles.textButton}>
            {isFree === "Yes" ? "Play" : price}
        </Button>
       
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
    imageContainer: {
        width: 55,
        height: 55,
        borderRadius: 10,
        marginRight: 8
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
        width: 100,
        borderRadius:10,
        height: 40,
    },

    textButton : {
        fontSize: 18,
        fontFamily: "Roboto",

    },

    textTitle: {
        fontSize: 14,
        fontWeight: "100",
        fontFamily: "serif",
        textTransform:"uppercase"
    },

    textGame: {
        fontSize: 16,
        fontWeight: "200",
        fontFamily: "sans-serif"
    },

})

export default GameList