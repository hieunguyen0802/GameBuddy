import { StyleSheet, Text, View, SafeAreaView , ScrollView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
})