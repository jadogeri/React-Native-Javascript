import { Button, Text } from 'react-native-paper'
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './ResetButtonStyle'

const ResetButton = ({title,pressHandler}) => {
  return (
    <View>
      <Button style={styles.button} onPress={pressHandler}>
        <Text style={styles.title}>{title}</Text>
      </Button>
    </View>
  )
}

export default ResetButton;

