import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
            {/* if size property is pass through, use that OR default to large */}
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1, // fills width of screen
        justifyContent: 'center', //centers vertically
        alignItems: 'center' //centers horizontally
    }
};

export { Spinner };
