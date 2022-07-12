import React from 'react';
import { View,Text,Alert,Pressable } from 'react-native';
import { Button } from 'react-native';
import styles from './styles'

const StyledButtons = (props) => {
    const Type = props.type;
    const bgColor = Type === "Primary"|| Type === "primary" ? '#171A20' : '#fff';
    const textColor = Type === "Primary"|| Type === "primary" ? '#fff' : '#171A20';

    return ( 
        <View style={styles.buttonContainer}>
        <Pressable  style={[styles.button,{backgroundColor:bgColor}]} onPress={()=> Alert.alert('Button Pressed',props.content+' Button Pressed')}>
            <Text style={[styles.text,{color:textColor}]} >
                {props.content}
                
            </Text>
        </Pressable>
      </View>
     );
}


export default StyledButtons;