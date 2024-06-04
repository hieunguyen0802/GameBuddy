import { View, Text } from 'react-native'
import React from 'react'
import { Icon, Button } from "react-native-paper";


const CustomButton = ({buttonLabel, onPress}) => {
  return (
    <View>
        <Button
            mode="contained"
            onPress={onPress}
            style={{ marginBottom: 30, backgroundColor: "#AD40AF" }}
            labelStyle={{ fontSize: 18, fontWeight: "700" }}
        >
            {buttonLabel}
        </Button>
    </View>
  )
}

export default CustomButton