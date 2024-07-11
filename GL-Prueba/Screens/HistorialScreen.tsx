import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HistorialScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Historial</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>Mi Historial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>Productos varios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>Saludo de bienvenida</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 16,
  },
});

export default HistorialScreen;