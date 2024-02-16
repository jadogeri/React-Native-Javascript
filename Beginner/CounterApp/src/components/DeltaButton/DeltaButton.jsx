import { Button,Text } from 'react-native-paper'
import React from 'react';
import {  Image } from 'react-native';
import styles from './DeltaButtonStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const DeltaButton = ({sign,color,pressHandler,longPressInHandler,longPressOutHandler}) => {
  return (
    
    <Button 
      onPress={pressHandler}
      style={[styles.button,{backgroundColor:color}]}>
        <MaterialCommunityIcons name='delta' size={20} color="black"/> 
    <Text style={styles.sign}>{sign}</Text>
    </Button>
  )
}

export default DeltaButton

