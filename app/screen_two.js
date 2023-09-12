/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Timer from './components/time';

export default class app extends Component{
    constructor() {
        super();
        this.state = {};
      }
    render(){
        return (
        <View style={styles.View}>

            <View style = {{justifyContent:'center',alignItems:'center',marginTop:200,fontsize:30}} >

             <Text style ={styles.bodyText}>Maximum attempts reached</Text>
            </View>
            <Timer/>


            <View style = {{justifyContent:'center',alignItems:'center',marginTop:200}} >
                <Image style={{width:150,height:150}} source= {require('./assest/image/lock1.png')}/>
            </View>
            <View style = {styles.bodytext} >
            <Text style ={styles.text}>To protect your information,access</Text>
            <Text style ={styles.text}>  has been locked for 5 minutes</Text>
            <Text style ={styles.text}>  come back later and try again.</Text>
            </View>

            <TouchableOpacity style={styles.circle} />
            <Text style={styles.quitText}> Quit </Text>

          </View>



        );

    }
}
const styles = StyleSheet.create({
    View:{
        flex:4,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:100,
        marginTop:-100,



    },
    quitText:{
      marginTop:-70,
      fontSize:20,
      fontFamily:'Roboto',
      color:'#252d42',
      textAlign:'center',

    },
    text:{
      fontsize:30,
      fontFamily:'Roboto',
      alignItems:'center',
      justifyContent:'center',
      color:'#000000',

    },
    bodyText:{
        fontsize:30,
        fontFamily:'Roboto',
        alignItems:'center',
        justifyContent:'center',
        color:'#000000',
    },
    circle: {
        width:100,
        height:100,
        margin:20,
        backgroundColor:'#80e9d8',
        justifyContent:'center',
        borderRadius:0,
        borderColor:'gray',

      },

});
