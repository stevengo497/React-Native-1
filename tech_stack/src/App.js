import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1}}>
                {/* flex: 1 fill up as much space as possible, no longer getting cut off on height */}
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;
