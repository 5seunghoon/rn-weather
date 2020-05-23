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
        backgroundColor: "#97f2f2"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
});