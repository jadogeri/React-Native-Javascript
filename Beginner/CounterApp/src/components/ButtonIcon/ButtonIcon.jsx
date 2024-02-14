import { StyleSheet, Text } from 'react-native-paper'
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './ButtonIconStyle'

const ButtonIcon = ({image,pressHandler}) => {
  return (
    <View>
      <TouchableOpacity onPress={pressHandler}>
        <Image source={image} style={styles.image}/>
        <Text>ButtonIcon</Text>

      </TouchableOpacity>
    </View>
  )
}

export default ButtonIcon

