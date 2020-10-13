import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Card from '../Components/Card';
import Colors from '../constants/colors';

const StartScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Reset"
                            onPress={() => {}}
                            color={Colors.secondry}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Confirm"
                            onPress={() => {}}
                            color={Colors.primary}
                        />
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default StartScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 90,
    },
});
