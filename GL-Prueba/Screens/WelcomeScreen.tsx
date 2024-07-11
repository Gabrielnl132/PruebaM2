import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME</Text>
      <Button title="LOGIN" onPress={() => navigation.navigate('Login')} />
      <Button title="REGISTER" onPress={() => navigation.navigate('Register')} />
      <Text style={styles.footer}>Desarrollado por: Gabriel Lucero</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    fontSize: 12,
    color: 'gray',
  },
});

export default WelcomeScreen;
