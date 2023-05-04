import React from 'react';
import {useState} from 'react'
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';

const App = () => {

  const [text, setText] = useState("")

  return (
    <View style={styles.container}>
      
      <View style={[styles.use, styles.primeiro]}>
        <Text style={styles.use}>NOME</Text>
      </View>
      <View style={styles.searchContainer}>
      <TextInput style={styles.searchInput} onChangeText={setText} value={text}/>
      <View style={styles.use}>
        <Text style={styles.use}>   SOBRENOME</Text>
      </View>
      <TextInput style={styles.searchInput}/>
      <View style={styles.use}>
        <Text style={styles.use}>CPF</Text>
      </View>
      <TextInput style={styles.searchInput}/>
      </View>
      <TouchableOpacity style={styles.orangeButton}>
        <Text style={styles.buttonText}>ENVIAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  use:{
    color: '#fff',
    fontSize:'20px',
    marginBottom: 5,
    marginLeft: -100,
    marginTop: 10
  },

  primeiro: {
    marginTop: 100
  },
  searchContainer: {
    width: '100%',
    alignItems: 'center',
  },
  searchInput: {
    fontSize: 22,
    backgroundColor: '#abbaba',
    borderRadius: 10,
    width: "80%",
    height: 35,
  },
  container: {
    flex: 1,
    backgroundColor: '#030a43',
    alignItems: 'center',
  },
  orangeButton: {
    backgroundColor: '#058113',
    padding: 12,
    borderRadius: 6,
    width: '50%',
    alignItems: 'center',
    marginLeft: 120,
    marginTop: 20
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
