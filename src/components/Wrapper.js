import React from 'react';
import {SafeAreaView, ImageBackground, StyleSheet} from 'react-native';
import BG from '../assets/images/bg.jpg'; // Ensure this path is correct
import {deviceHeight, deviceWidth} from '../constants/Scaling';

export default function Wrapper({children, style}) {
    console.log(BG)
  return (
    <ImageBackground
      source={BG}
      resizeMode="cover"
      style={styles.container}>
      {/* Add a border to ensure the image is visible */}
      <SafeAreaView style={[styles.safeArea, {...style}]}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
