import React from 'react';
import { View,Text,ImageBackground } from 'react-native';
import styles from './styles'

const CarItem = (props) => {
    return ( 
        <View style={styles.carContainer}>
        <ImageBackground style={styles.image} source={require('../../assets/images/ModelS.jpeg')}>

        
        </ImageBackground>
        <View style={styles.title_frame}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.sub_title}>{props.sub_title}</Text>
        </View>
      </View>
     );
}


export default CarItem;