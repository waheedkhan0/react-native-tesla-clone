import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
        carContainer:{
            width: '100%',
            height:'100%',
        
          },
          title_frame:{
            marginTop:'30%',
            width: '100%',
            alignItems:'center',
          },
          title:{
            fontSize: 40,
            fontWeight : "bold",
          },
          sub_title:{
            fontSize: 16,
            color:'#5c5e62'
          },
          image:{
            width:'100%',
            height:'100%',
            resizeMode:'cover',
            position:'absolute'
          }
    }
);

export default styles;