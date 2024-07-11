import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function RegisterScreen({ navigation }: any) {
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [telefono, setTelefono] = useState('');

    function registro() {
        // Validar campos requeridos
        if (!nombreUsuario || !correo || !contrasenia || !telefono) {
            Alert.alert('Error', 'Todos los campos son requeridos');
            return;
        }

        createUserWithEmailAndPassword(auth, correo, contrasenia)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Usuario registrado:', user);
            navigation.navigate('Login');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error al registrar usuario:', errorCode, errorMessage);
            Alert.alert('Error', errorMessage);
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>REGISTRO</Text>

            <TextInput
                style={styles.input}
                placeholder='Nombre de usuario'
                onChangeText={(texto) => setNombreUsuario(texto)}
                value={nombreUsuario}
            />
            <TextInput
                style={styles.input}
                placeholder='Correo electrónico'
                onChangeText={(texto) => setCorreo(texto)}
                keyboardType='email-address'
                value={correo}
            />
            <TextInput
                style={styles.input}
                placeholder='Contraseña'
                onChangeText={(texto) => setContrasenia(texto)}
                secureTextEntry={true}
                value={contrasenia}
            />
            <TextInput
                style={styles.input}
                placeholder='Teléfono'
                onChangeText={(texto) => setTelefono(texto)}
                keyboardType='phone-pad'
                value={telefono}
            />

            <Button title='Registrar' onPress={registro} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});
