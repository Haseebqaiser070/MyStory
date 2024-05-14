import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';
import Colors from '../colors/Color';

export default function App() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load the sound file when the component mounts
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../audios/audio.mp3')
      );
      setSound(sound);
    };
    loadSound();

    // Cleanup function
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const toggleSound = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync(); // Pause the sound
    } else {
      await sound.playAsync(); // Play the sound
    }
    setIsPlaying(!isPlaying); // Toggle the state
  };

  return (
    <View style={AudioPLayer.audioPlayerConatienr}>
      <TouchableOpacity title={isPlaying ? 'Pause Sound' : 'Play Sound'} onPress={toggleSound} >
        <Image source={require('../img/volumeIcon.png')}></Image>
      </TouchableOpacity>
       <View style = {AudioPLayer.auidioBar}>
        <View style = {AudioPLayer.auidioBarSub}></View>
       </View>
      <TouchableOpacity title={isPlaying ? 'Pause Sound' : 'Play Sound'} onPress={toggleSound} >
        <Image source={require('../img/Pause.png')}></Image>
      </TouchableOpacity>
    </View>
  );
}

const AudioPLayer = StyleSheet.create(
    {
        audioPlayerConatienr:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }, 

        auidioBar:{
            width:'70%',
            height:5,
            backgroundColor:Colors.cardBf
        }
        ,
        auidioBarSub:{
            width:'50%',
            height:5,
            backgroundColor:Colors.primary
        }
    }
);
