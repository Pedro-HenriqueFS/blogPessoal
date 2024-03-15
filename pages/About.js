import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function About() {
    return(
        <View style={styles.container}>
            <Text></Text>
            <Image style={styles.containerImage2}
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/8/8b/LOUD_allmode.png'}}>
                </Image>
                <Text>Quem é a LOUD?
                    Loud (estilizado como LOUD) é a maior organização brasileira de esportes eletrônicos com equipes que competem em Free Fire, League of Legends e Valorant, que no Valorant da muita tristeza de ver esse time jogar quando está em um dia muito ruim, você tem vontade de se matar. Fundada em 2019, a LOUD é a organização de esportes eletrônicos com maior número de seguidores nas redes sociais do Brasil e a segunda maior do mundo.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerImage2:{
        width: 200,
        height: 150,
        marginBottom: 50,
        textAlign: 'center',
    },
})