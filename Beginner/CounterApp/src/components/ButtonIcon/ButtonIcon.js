import { Text } from 'react-native-paper'
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './ButtonIconStyle'

const ButtonIcon = ({image,pressHandler,longPressInHandler,longPressOutHandler}) => {
  return (
    <View>
      <TouchableOpacity onPress={pressHandler} 
                        onPressIn={longPressInHandler}
                       >
        <Image source={image} style={styles.image}/>

      </TouchableOpacity>
    </View>
  )
}

export default ButtonIcon

