import React, { useState } from 'react';
import { Text ,StyleSheet, Image, TouchableOpacity, TextInput, View, KeyboardAvoidingView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import bannerImg from '../assets/banner.png';

export default function Welcome() {
  const[weightQuantity, setweightQuantity] = useState('');
  const navigation = useNavigation();

  function navigateToWater() {
    navigation.navigate('Water', {amount: weightQuantity});
  }

  return  (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
          <Image style={styles.banner} source={bannerImg}/>
          <Text style={styles.title}>Control your daily water intake</Text>
          <View style={{ marginVertical: 50 }}>
          <Text style= {styles.enterInput}>Enter the amount in mL of water you want to drink daily</Text>
          <TextInput
            placeholderTextColor={'white'}
            keyboardType='numeric'
            style={styles.input}
            placeholder='quantity'
            onChangeText={(val) => setweightQuantity(val)}
            />
          </View>
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
  },

  enterInput: {
    color: '#FFDEAD',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 300,
  },

  button: {
    width: 72,
    height: 72,
    backgroundColor: '#2e5b9a',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 36,
    marginVertical: 10
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    marginTop: 10,
    width: 300,
    // fontWeight: 'bold',
    color: 'white',
  },
})
