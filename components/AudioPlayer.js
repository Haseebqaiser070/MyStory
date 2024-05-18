// components/AudioPlayer.js
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import Colors from '../colors/Color';

const AudioPlayer = () => {
  const { isPlaying, setIsPlaying } = useAudioPlayer();
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../audios/audio.mp3')
      );
      setSound(sound);
    };
    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const toggleSound = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.audioPlayerContainer}>
      <TouchableOpacity onPress={toggleSound}>
        <Image source={ require('../img/volumeIcon.png')} />
      </TouchableOpacity>
      <View style={styles.audioBar}>
        <View style={styles.audioBarSub} />
      </View>
      <TouchableOpacity onPress={toggleSound}>
        <Image source={ require('../img/Pause.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  audioPlayerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  audioBar: {
    width: '70%',
    height: 5,
    backgroundColor: Colors.cardBf,
  },
  audioBarSub: {
    width: '50%',
    height: 5,
    backgroundColor: Colors.primary,
  },
});

export default AudioPlayer;
