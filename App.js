/*
* File: App.js
* Author: Sánta Renáta Diána
* Copyright: 2021, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-03-27
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './components/Button';

function calcRadius(alpha, side){
  let rad = alpha * Math.PI/180
  let radius = 1.0/2.0*side*(Math.sin(rad));
  return radius;
}

export default function App() {
  const[side,setSide] = useState('');
  const[alpha,setAlpha] = useState('');
  const[radius, setRadius] = useState('');

  function startCalc(){
    let radius = calcRadius(side,alpha);
    setRadius(radius);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        TOMBSUG
      </Text>

      <Text style={styles.smalltitle}>Rombuszba írható kör sugara</Text>
  
      <View style={styles.body}>

        <Text>Oldal:</Text>
        <TextInput style={styles.input}
        onChangeText={sideInput => setSide(sideInput)}

        />

        <Text>Alfa szög:</Text>
        <TextInput style={styles.input}
        onChangeText={alphaInput => setAlpha(alphaInput)}
        />

        <Button onPress={(startCalc)}/>

        <Text>Eredmény:</Text>
        <TextInput style={styles.input}
          value={radius}
        />

      </View>

      <View>
        <Text>Sánta Renáta Diána, Szoft II N, 2023.03.27</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor:'darksalmon',
    borderRadius:4,
    width:'100%',
    height:40,
    textAlign:'center',
    fontSize:35,
    fontFamily:'Courier New',
  },
  input:{
    backgroundColor:'white',
    width:'20%',
    height:30,
  },
  body:{
    flex:1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smalltitle:{
    fontFamily:'Courier New',
    fontSize:22,
    marginTop:8,
    textDecorationLine:"underline",
    textDecorationColor:'gray'
  }
});
