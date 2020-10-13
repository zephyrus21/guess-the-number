import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        elevation: 15,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        padding: 25,
        borderRadius: 15,
    },
});
