import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Blog({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Clique aqui para ver o KDA das 3 partidas tristes da LOUD</Text>
            <Text style={styles.texto}>Um complemento é que nosso querido Felipe de Loyola ou Less amassou em todos os mapas e o resto ficou dormindo no game inteiro</Text>
            <Pressable onPress={() => navigation.navigate("Info1")}>
                <Text style={styles.textoBotao}> Abra a tela do primeiro mapa (Icebox)</Text>
            </Pressable>

           
            <Pressable onPress={() => navigation.navigate('Info2')}>
                <Text style={styles.textoBotao}> Abra a tela do segundo mapa (Breeze)</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Info3')}>
                <Text style={styles.textoBotao}> Abra a tela do terceiro mapa (Ascent)</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
    },
    textoBotao: {
        color: 'green',
        fontSize: 20,
        margin: 10,
    },
    texto: {
        fontSize: 25,
        margin: 10,
        color: 'green',

    },
})