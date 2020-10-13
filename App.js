import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';

export default function App() {
    return (
        <View>
            <Header title="Guess the Number" />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
