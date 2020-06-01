import React, { useState } from 'react';
import { Text ,StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import bannerImg from '../assets/banner.png';

export default function Welcome() {
  const[weightQuantity, setweightQuantity] = useState('');
  const navigation = useNavigation();

  function navigateToWater() {
    navigation.navigate('Water', {pw: weightQuantity});
  }

  return  (
        <KeyboardAvoidingView style={styles.container} behavior='position'>
          <Image style={styles.banner} source={bannerImg}/>
          <Text style={styles.title}>Control your daily water intake</Text>
          <Text style= {styles.enterInput}>Enter your weight or the amount of water in mL you want to drink every day</Text>
          <TextInput
            keyboardType='numeric'
            style={styles.input}
            placeholder='weight or quantity'
            onChangeText={(val) => setweightQuantity(val)}
            />
          <TouchableOpacity style={styles.button} onPress={navigateToWater}>
            <MaterialIcons name="opacity" size={32} color="#FFF"/>
          </TouchableOpacity>
        </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282F68',
  },

  banner: {
    alignSelf: 'center',
  },

  title: {
    color: '#B0E0E6',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 300,
    marginVertical: 20,
    paddingBottom: 20
  },

  enterInput: {
    color: '#FFDEAD',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 300,
    marginVertical: 20

  },

  button: {
    width: 72,
    height: 72,
    backgroundColor: '#2e5b9a',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 36,
    marginVertical: 30
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 300,
    fontWeight: 'bold',
    color: 'white'
  },
})
