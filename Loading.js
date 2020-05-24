import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting weather</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingStart: 30,
        paddingBottom: 100,
        backgroundColor: "#909090"
    },
    text: {
        color: "#FFFFFF",
        fontSize: 30
    }
});