import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner,CardSection } from './components/common';
//no need to add index.js at the end, React-Native knows to look for it by default
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAXUeonXvxtJSaeUso4hEF4nekWmcGZC7U",
            authDomain: "authentication-205a6.firebaseapp.com",
            databaseURL: "https://authentication-205a6.firebaseio.com",
            projectId: "authentication-205a6",
            storageBucket: "authentication-205a6.appspot.com",
            messagingSenderId: "737034281121"
        });

        firebase.auth().onAuthStateChanged((user) => { //event handler BOTH signing in and signing out
            if (user) { // if user returns is TRUE, then switch loggedIn to true which means 'Signed in'
                this.setState({ loggedIn: true });
            } else { // if there is no user passed during onAuthStateChanged, then noone is signed in
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: //if logged in, then return a Button tag
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />
                // if not logged in, then return the actual LoginForm
            default:
                return <Spinner size="large" />
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
                {/* ABOVE: Header stays there, but renderContent is true show logout Button
                if false, then show LoginForm */}
            </View>
        );
    }
}

export default App;
