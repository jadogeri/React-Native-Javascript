import { Text, View } from 'react-native'
import React from 'react'
import styles from './CountIconStyle'

const CountIcon = ({count}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.icon,count === 0 ?{color:'black'} :count > 0 ? {color : 'blue'} : {color: 'red'}]}>{count}</Text>
    </View>
  )
}

export default CountIcon

