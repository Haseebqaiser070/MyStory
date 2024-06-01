import React, { useState, useEffect, useRef } from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import Colors from '../colors/Color';

const AudioPlayer = () => {
  const { isPlaying, setIsPlaying } = useAudioPlayer();
  const [sound, setSound] = useState(null);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
          require('../audios/audio.mp3')
      );
      setSound(sound);
      const { durationMillis } = await sound.getStatusAsync();
      setDuration(durationMillis);
    };
    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(async () => {
        const { positionMillis } = await sound.getStatusAsync();
        setPosition(positionMillis);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPlaying, sound]);

  const toggleSound = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = async () => {
    if (!sound) return;

    if (isMuted) {
      await sound.setVolumeAsync(1); // Unmute
    } else {
      await sound.setVolumeAsync(0); // Mute
    }
    setIsMuted(!isMuted);
  };

  const progress = (position / duration) * 100;

  return (
      <View style={styles.audioPlayerContainer}>
        <TouchableOpacity onPress={toggleSound}>
          {isPlaying ? (
              <Image source={require('../img/Pause.png')} />
          ) : (
              <Image source={require('../img/play.png')} />
          )}
        </TouchableOpacity>
        <View style={styles.audioBar}>
          <View style={[styles.audioBarSub, { width: `${progress}%` }]} />
        </View>
        <TouchableOpacity  onPress={toggleMute}>
          {isMuted ? (
              <Image  source={require('../img/mute.png')} />
          ) : (
              <Image source={require('../img/volumeIcon.png')} />
          )}
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
    height: '100%',
    backgroundColor: Colors.primary,
  },
});

export default AudioPlayer;
