import React, { useState } from "react";
import {View, Text, TextInput, Button, StyleSheet} from "react-native"

const LoginScreen = () => {
    const [email, setEMail] = useState('');
    const [password, setPassword] = useState('');

    const  mudarLogin = () => {
        console.log(`Login com Email: ${email} e senha: ${password}`);
    };

    return(
        <View>
        <Text>Tela de Login</Text>
        <TextInput

        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1
        justifyContent: 'center',
        alignItems: 'center',
    },         
});
