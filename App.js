import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[side,setSide] = useState('');
  const[alpha,setAlpha] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        TOMBSUG
      </Text>

  
      <View style={styles.body}>
        <Text>Rombuszba írható kör sugara</Text>

        <Text>Oldal:</Text>
        <TextInput style={styles.input}
        onChangeText={sideInput => setSide(sideInput)}

        />

        <Text>Alfa szög:</Text>
        <TextInput style={styles.input}
        onChangeText={alphaInput => setAlpha(alphaInput)}
        />

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
    fontSize:30
  },
  input:{
    backgroundColor:'white',
    width:'20%',
    height:30
  },
  body:{
    flex:1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
