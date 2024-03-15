import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Feed() {
    return(
        <View style={styles.container}>
            <Text style={styles.text1}>Valorant Masters Madrid: LOUD perde da Gen.G na estreia.</Text>
            <Text style={styles.text2}>A triteza para o torcedor que teve que assistir esse jogo</Text>  
            <Text style={styles.text3}>A LOUD estreou com derrota com as partidas horrorosas contra um time coreano que ninguém conhece por 2 a 1 para a Gen.G na estreia do Valorant Masters Madrid 2024, primeiro campeonato internacional da temporada, realizado em Madri, na Espanha, com participação de oito times.</Text>
          <View style={styles.container2}>
          <Image style={styles.containerImage}
                source={{uri: 'https://pt.egamersworld.com/images/matches/32hQ4104mU.jpg'}}></Image>
          </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text3:{
        marginBottom: 70,
        fontSize: 15,
        width:350,
    },
    text2:{
        marginBottom: 70,
        fontSize: 15,
    },
    containerImage: {
        width: 350,
        height: 200,
    },
    
})