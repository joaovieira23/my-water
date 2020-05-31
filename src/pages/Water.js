import React, { useState } from 'react';
import { Text ,StyleSheet, TouchableOpacity, Picker } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native'


import bannerImg from '../assets/banner.png';

export default function Water(props) {
  // const navigation = useNavigation();
  const [water, setWater] = useState('');

  function handleSubmit() {
  }

  return  (
     <LinearGradient
        colors={['#282F68', '#2A3379']}
        style={styles.container}
     >
        <Text style={styles.title}>Add the amount of drink</Text>


        <Picker
          style={styles.picker}
          selectedValue={water}
          onValueChange={
            (itemValue, itemIndex) =>
              setWater({
                itemValue
              })
          }
          itemStyle={styles.itemPicker}
        >
          <Picker.Item  label="30 ml" value="30 ml" />
          <Picker.Item label="50 ml" value="50 ml" />
          <Picker.Item label="100 ml" value="100 ml" />
          <Picker.Item label="150 ml" value="150 ml" />
          <Picker.Item label="200 ml" value="200 ml" />
          <Picker.Item label="250 ml" value="250 ml" />
          <Picker.Item label="300 ml" value="300 ml" />
          <Picker.Item label="330 ml" value="330 ml" />
          <Picker.Item label="400 ml" value="400 ml" />
          <Picker.Item label="500 ml" value="500 ml" />
          <Picker.Item label="600 ml" value="600 ml" />
          <Picker.Item label="800 ml" value="800 ml" />
          <Picker.Item label="1000 ml" value="1000 ml" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <MaterialIcons name="add" size={32} color="#FFF"/>
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

  title: {
    color: '#B0E0E6',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 300,
    marginVertical: 20,
    paddingBottom: 350
  },

  button: {
    width: 72,
    height: 72,
    backgroundColor: '#2e5b9a',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  picker: {
    width: 350
  },
  itemPicker: {
    fontWeight: 'bold'
  }
})

