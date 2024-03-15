import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}> Como é triste a vida sendo torcedor da LOUD valorant
            </Text>
           
            <Image style={styles.containerImage}
                source={{uri: 'https://img2.gratispng.com/20180623/wur/kisspng-league-of-legends-world-championship-gen-g-lol-seo-ksv-esports-5b2ef91ed21442.2762024815298050868605.jpg'}}></Image>
                <Image style={styles.containerImage2}
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/8/8b/LOUD_allmode.png'}}>
                </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    containerImage: {
        width: 200,
        height: 150,
    },
    containerImage2:{
        width: 200,
        height: 150,
        marginTop: 70,
    },
    texto:{
        marginBottom: 70,
        fontSize: 17,
        textAlign: 'center',
        
    },
    

})