import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/img/coffee-bg.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Nikmati Secangkir Kopi Hangat di Cappo Coffee!</Text>
        <Text style={styles.subtitle}>
          Welcome to our cozy coffee corner, where every cup is delightful for you.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} color="#A0522D" style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000000',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    padding: 15
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#C67C4E',
    borderRadius: 15,
    width: '90%',
    padding: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SplashScreen;
