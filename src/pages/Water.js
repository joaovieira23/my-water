import React, { useState } from 'react';
import { Text ,StyleSheet, TouchableOpacity, Picker, Modal, View, TouchableHighlight} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function Water({ route, navigation }) {
  // const navigation = useNavigation();
  const [pickerDisplayed, setPickerDisplayed] = useState(false);
  const [pickerValue, setPickerValue] = useState('')
  const { pw } = route.params;

  function handleSubmit() {
    console.log(pw);
    setPickerDisplayed(!pickerDisplayed)
    console.log(!pickerDisplayed)
  }

  function setValue(newValue) {
    setPickerValue(newValue);
    setPickerDisplayed(!pickerDisplayed)
  }

  const pickerValues = [
    {
      title: '50ml',
      value: '50'
    },
    {
      title: '100ml',
      value: '100'
    },
    {
      title: '150ml',
      value: '150'
    },
    {
      title: '200ml',
      value: '200'
    },
    {
      title: '300ml',
      value: '300'
    },
    {
      title: '330ml',
      value: '330'
    },
    {
      title: '400ml',
      value: '400'
    },
    {
      title: '500ml',
      value: '500'
    },
    {
      title: '600ml',
      value: '600'
    },
    {
      title: '800ml',
      value: '800'
    },
    {
      title: '1000ml (1 Litro)',
      value: '1000'
    },
  ]


  return  (
     <LinearGradient colors={['#282F68', '#2A3379']} style={styles.container}>
        <Text style={styles.title}>Add the amount of drink</Text>

        <AnimatedCircularProgress
          size={300}
          width={40}
          fill={100}
          tintColor="#75A1DE"
          backgroundColor="#fff"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <MaterialIcons name="add" size={32} color="#FFF"/>
        </TouchableOpacity>

        <Modal visible={pickerDisplayed} animationType={"slide"} transparent={true}>
          <View style={styles.picker}>
            <Text>Please pick a value</Text>
            { pickerValues.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => setValue(value)} style={{ paddingTop: 6, paddingBottom: 4 }}>
                  <Text style={styles.itemPicker}>{ value.title }</Text>
                </TouchableHighlight>
            })}

            <TouchableHighlight onPress={() => handleSubmit()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#999' }}>Cancel</Text>
            </TouchableHighlight>
          </View>
        </Modal>
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
    paddingBottom: 80
  },

  button: {
    width: 72,
    height: 72,
    backgroundColor: '#2e5b9a',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 80
  },
  picker: {
    padding: 20,
    backgroundColor: '#282F68',
    bottom: 10,
    fontWeight: 'bold',
    left: 1,
    right: 1,
    alignItems: 'center',
    position: 'absolute' ,
    borderRadius: 10,
    maxWidth: 510
  },

  itemPicker: {
    fontWeight: 'bold',
    fontSize: 8
  }
})

