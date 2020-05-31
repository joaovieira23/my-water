import React from 'react';
import { Text ,StyleSheet, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import bannerImg from '../assets/banner.png';

export default function Welcome() {
  const navigation = useNavigation();

  function navigateToWater() {
    navigation.navigate('Water');
  }

  return  (
     <LinearGradient
        colors={['#282F68', '#2A3379']}
        style={styles.container}
     >
        <Image style={styles.banner} source={bannerImg}/>
        <Text style={styles.title}>Control your daily water intake</Text>
        <TouchableOpacity style={styles.button} onPress={navigateToWater}>
          <MaterialIcons name="opacity" size={32} color="#FFF"/>
        </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  banner: {
    alignSelf: 'center',
    alignItems: 'center'
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

  button: {
    width: 72,
    height: 72,
    backgroundColor: '#2e5b9a',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
