import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartScreen from './Screens/StartScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [guessRound, setGuessRound] = useState(0);

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
        setGuessRound(0);
    };

    const gameOverHandler = (numofRounds) => {
        setGuessRound(numofRounds);
    };

    let content = <StartScreen onStartGame={startGameHandler} />;

    if (userNumber && guessRound <= 0) {
        content = (
            <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
        );
    } else if (guessRound > 0) {
        content = <GameOverScreen />;
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
