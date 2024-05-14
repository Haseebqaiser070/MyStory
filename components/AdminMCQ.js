import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import Colors from '../colors/Color';

const RadioButton = ({ selected, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.radioButton, selected && styles.selected]}>
    {selected && <View style={styles.radioButtonInner} ><Image source={require('../img/tick.png')}></Image></View>}
  </TouchableOpacity>
);

const TwoViews = () => {
  const [selectedView, setSelectedView] = useState('');

  const handleSelectView = (view) => {
    if (selectedView !== view) {
      setSelectedView(view);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.label}>
        <TextInput
      style={styles.input}
      placeholder="Please write option here"
      placeholderTextColor="#ffffff"
      selectionColor={Colors.primary}
    />
          <RadioButton selected={selectedView === 'A'} onPress={() => handleSelectView('A')} />
        </View>
      </View>
      <View style={styles.view}>
        <View style={styles.label}>
        <TextInput
      style={styles.input}
      placeholder="Please write option here"
      placeholderTextColor="#ffffff"
      selectionColor={Colors.primary}
    />
          <RadioButton selected={selectedView === 'B'} onPress={() => handleSelectView('B')} />
        </View>
      </View>
      <View style={styles.view}>
        <View style={styles.label}>
        <TextInput
      style={styles.input}
      placeholder="Please write option here"
      placeholderTextColor="#ffffff"
      selectionColor={Colors.primary}
    />
          <RadioButton selected={selectedView === 'C'} onPress={() => handleSelectView('C')} />
        </View>
      </View>
      <View style={styles.view}>
        <View style={styles.label}>
        <TextInput
      style={styles.input}
      placeholder="Please write option here"
      placeholderTextColor="#ffffff"
      selectionColor={Colors.primary}
    />
          <RadioButton selected={selectedView === 'D'} onPress={() => handleSelectView('D')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop:10,
  },
  view: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 10,
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    color:Colors.white
  },
  radioButton: {
    width: 30,
    height: 30,
    borderRadius: 40/2,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  radioButtonInner: {
    width: 22,
    height: 22,
    borderRadius: 30/2,
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems:'center'
  },
  selected: {
    borderColor: 'green',
    borderWidth: 4,
  },
  input:{
    color:Colors.white
  }
});

export default TwoViews;
