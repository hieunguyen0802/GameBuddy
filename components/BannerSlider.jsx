import { View, Text, Image} from 'react-native'
import React from 'react'

const BannerSlider = ({data}) => {
  return (
    <View>
      <Image source={data.image} style={{borderRadius:10, height:150, width:300}}/>
    </View>
  )
}

export default BannerSlider