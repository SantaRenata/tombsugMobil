/*
* File: Button.js
* Author: Sánta Renáta Diána
* Copyright: 2021, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-03-27
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/


import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

const Button = (props) => {
  return (
    <TouchableHighlight
        style={styles.button}
        onPress={props.onPress}
        >
        <Text style={styles.buttonText}>Számít</Text>
    </TouchableHighlight>
  );
}

export default Button;

const styles = StyleSheet.create({
    button:{
        backgroundColor:'salmon',
        marginTop:10,
        padding:8,
        borderRadius:6,
        width:'20%',
        alignContent:'center',
        textAlign:'center'
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontFamily:'Arial'
    }
})