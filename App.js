import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartScreen from './Screens/StartScreen';
import GameScreen from './Screens/GameScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState();

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
    };

    let content = <StartScreen onStartGame={startGameHandler} />;

    if (userNumber) {
        content = <GameScreen userChoice={userNumber} />;
    }

    return (
        <View style={styles.screen}>
            <Header title="Guess the Number" />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
