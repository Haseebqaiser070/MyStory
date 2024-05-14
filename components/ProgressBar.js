import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../colors/Color';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [timePassed, setTimePassed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimePassed(prevTime => prevTime + 1);
      setProgress(prevProgress => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        return 100;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
        <View>
          <Text style={styles.clockText}>{formatTime(timePassed)}</Text>
        </View>
      </View>
    </View>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes < 10 ? '0' + minutes : minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
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
    borderRadius:progressBarHeight/2,
    backgroundColor:Colors.primary ,
    height: '100%',
  },
  clockIcon: { 
  },
  clockText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
   
});

export default ProgressBar;
