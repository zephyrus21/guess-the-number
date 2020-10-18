import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './Components/Header';
import StartScreen from './Screens/StartScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
};

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [guessRound, setGuessRound] = useState(0);
    const [dataLoading, setDataLoading] = useState(false);

    if (!dataLoading) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoading(true)}
            />
        );
    }

    const configureNewGameHandler = () => {
        setGuessRound(0);
        setUserNumber(null);
    };

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
        content = (
            <GameOverScreen
                roundsNumber={guessRound}
                userNumber={userNumber}
                onRestart={configureNewGameHandler}
            />
        );
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
