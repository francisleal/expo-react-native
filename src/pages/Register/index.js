import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import immagemFundo from "../../assets/bg.png";

import styles from './styles';

function Register() {

    const navigation = useNavigation();

    function navigateLogin() {
        navigation.navigate('Login');
    }

    return (
        <ImageBackground source={immagemFundo} style={styles.image}>
            <View style={styles.container}>

                <View style={styles.title}>
                    <Text style={styles.titleName}>Save note</Text>
                    <Text style={styles.titleTela}>Register</Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirme sua senha"
                />


                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.buttonText} >Register</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateLogin}>
                    <Text style={styles.voltar}>Voltar</Text>
                </TouchableOpacity>


                <StatusBar style="auto" />

            </View>
        </ImageBackground>
    );
}

export default Register;
