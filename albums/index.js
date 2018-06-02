// Import a library to help create a component
import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}> //eliminates the 'bounce' (ScrollView) when you're scrolling, now can scroll through entire list w/ no issues
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
