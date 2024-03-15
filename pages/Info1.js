import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Info1({navigation}) {
    return(
        <View style={styles.container}>
            <Text></Text>
            <Image style={styles.containerImage}
                source={{uri: 'https://s2-ge.glbimg.com/D2ldjAVj4oQ_LDmBUYgi9--DxHY=/0x0:1919x1079/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/p/n/xAgkUrSvOwOsKvzW8h1w/geng-loud-icebox.jpg'}}></Image>
            <Pressable style= {styles.botao}
            onPress={() => navigation.goBack()}>
                <Text style= {styles.textoBotao}> Voltar para o blog</Text>
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
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
    },
    textoBotao: {
        color: 'white',
        fontSize: 20,
    },
    containerImage: {
        width: 700,
        height: 400,
    },
})