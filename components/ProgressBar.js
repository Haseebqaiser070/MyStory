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
            <Svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path
                  d="M10.875 6.625C10.875 9.04 8.915 11 6.5 11C4.085 11 2.125 9.04 2.125 6.625C2.125 4.21 4.085 2.25 6.5 2.25C8.915 2.25 10.875 4.21 10.875 6.625Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <Path
                  d="M6.5 4V6.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <Path
                  d="M5 1H8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
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
