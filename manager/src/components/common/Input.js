import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry ={secureTextEntry} // will hide password - no need to write {true}
                placeholder={placeholder}
                autoCorrect={false} // removes auto correct
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };

// ****TextInput Lifecycle:****
// User types TextInput
// onChangeText event called
// 'setState' with new text
// Componet rerenders
// When TextInput rerenders, we will tell it that its value is 'this.state.text'


// *****flex*****
// inputStyle and labelStyle are within the View
// so flex is total 3 b/c 2 for input and 1 for label
// this means inputStyle will take up 2/3 of the total
// while labelStyle will take up 1/3 of the View
