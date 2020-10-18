import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Image
                style={styles.image}
                source={require('../assets/success.png')}
                resizeMode="cover"
            />
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 20,
        marginVertical: 50,
    },
});

export default GameOverScreen;
