import React from 'react';
import { View,Text,FlatList,Dimensions } from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';

const CarsList = (props) => {
   
    
    return ( 
        <View style={styles.container}> 
        
    <FlatList 
    data={cars}
    renderItem={({item})=>
        <CarItem name={item.name} tagline={item.tagline} subTitleCTA={item.subTitleCTA} image={item.image} ></CarItem>
    }
    showsVerticalScrollIndicator={false}
    snapToAlignment={'start'}
    decelerationRate={'fast'}
    snapToInterval={Dimensions.get('window').height}
    ></FlatList>
      </View>
     );
}


export default CarsList;