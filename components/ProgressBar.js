// components/ProgressBar.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { useProgressBar } from '../context/ProgressBarContext';
import Colors from '../colors/Color';
import Svg, { Circle, Path } from 'react-native-svg';

const ProgressBar = () => {
  const { isPlaying } = useAudioPlayer();
  const {
    progress,
    setProgress,
    timePassed,
    setTimePassed,
    resetProgress,
    resetProgressDone,
  } = useProgressBar();

  useEffect(() => {
    let interval;

    if (resetProgress) {
      setProgress(0);
      setTimePassed(0);
      resetProgressDone();
    } else if (!isPlaying) {
      interval = setInterval(() => {
        setTimePassed(prevTime => prevTime + 1);
        setProgress(prevProgress => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          }
          return 100;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, resetProgress]);

  return (
    <View style={styles.container}>

      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%`, position: 'relative' }]} />
        <View style={{ position: "absolute", marginLeft: "50%" }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <Circle cx="12" cy="12" r="10" />
              <Path d="M8 6v6l4 2" />
            </Svg>

            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginLeft: 4 }}>
              {formatTime(timePassed)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const formatTime = (seconds) => {
  return `${seconds}s`;
};


const { width } = Dimensions.get('window');
const progressBarHeight = 20;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  progressBar: {
    backgroundColor: 'gray',
    height: progressBarHeight,
    borderRadius: progressBarHeight / 2,
    overflow: 'hidden',
  },
  progressFill: {
    borderRadius: progressBarHeight / 2,
    backgroundColor: Colors.primary,
    height: '100%',
  },
  clockText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProgressBar;
