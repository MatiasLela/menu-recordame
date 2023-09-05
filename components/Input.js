import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const Input = ({ placeholder, estilo, contraseña }) => {
    return (
        <View style={styles.containerInput}>
            <TextInput
                style={[styles.input, styles[estilo]]}
                placeholder={placeholder}
                secureTextEntry={contraseña}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputRegistro: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.55)',
        borderRadius: 10,
        width: 282,
    },

    inputCuenta: {
        borderWidth: 1,
        borderColor: '#2FD2A3',
        borderRadius: 10,
        width: 162,
    },
    input: {
        height: 49,
        textAlign: 'center',
    },
    containerInput: {
        justifyContent: 'center',
        flex: 2,
        alignItems: 'center',
        margin: 35,
    }
});

export default Input;