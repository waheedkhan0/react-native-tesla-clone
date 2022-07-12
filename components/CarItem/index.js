import React from 'react';
import { View,Text,ImageBackground } from 'react-native';
import styles from './styles'
import StyledButtons from '../StyledButton';

const CarItem = (props) => {
    const {name,tagline,image,subTitleCTA} = props;
    return ( 
        <View style={styles.carContainer}>
        <ImageBackground style={styles.image} source={image}>

        
        </ImageBackground>
        <View style={styles.title_frame}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.sub_title}>
            {tagline} 
            {' '}
            <Text style={styles.subTitleCTA}>
                    {subTitleCTA}
            </Text> 
          </Text>
        </View>
        <View style={styles.buttonContainer}>
        <StyledButtons type="primary" content="Custom Order"></StyledButtons>
        <StyledButtons  type="secondary" content="Existing Inventory"></StyledButtons>
        </View>
        
      </View>
     );
}


export default CarItem;