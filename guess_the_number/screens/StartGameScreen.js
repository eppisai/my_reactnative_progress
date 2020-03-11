import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/color';
import Input from '../components/input';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setconfirmed] = useState(false);
    const [selectedNumber, setselectedNumber] = useState();
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g), '');
        setconfirmed(false);
    }
    const resetInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
            return;
        }
        setEnteredValue('');
        setconfirmed(false);
    }
    const confirmInputHandler = () => {
        setconfirmed(true);
        setEnteredValue('');
        setselectedNumber(parseInt(enteredValue));
    };
    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <text>chosenNumber: {selectedNumber}</text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            keyboard.dismiss();
        }}>
            <View styles={styles.screen}>
                <Text>The Game Screen!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select A Number</Text>
                    <Input style={styles.inputContaner} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardtype="numeric" maxLength={2} onChangeText={numberInputHandler} value={enteredValue} />
                    <View styles={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent} /></View>
                        <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10

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
        paddingHorizontal: 15
    },
    button: {
        width: 100

    }
});




export default StartGameScreen;