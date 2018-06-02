import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true }); //clears error message when attempting to log in again w/ new info and change loading to true

        firebase.auth().signInWithEmailAndPassword(email, password) //if success then....
            .then(this.onLoginSuccess.bind(this))
            .catch(() => { // if failed to sign in, then...
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this)); // if failed to create user w/ same email & password then...
            });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false, //no need for Spinner anymore b/c request is complete
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) { //also equals (this.state.loading === true)
            return <Spinner size="small" />;
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    //ABOVE: if loading is true, then show small Spinner, if not then show Button

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="example@gmail.com"
                        value={this.state.email} // must tell TextInput what the value is, it doesn't know by default
                        onChangeText={email => this.setState({ email })} //prop - when text is changed, setState updates
                        //passing both of these as props
                        label="Email"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry //automatically true unless noted
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />

                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                    {/* by default this is an empty string, then once error happens, setState changes w/ error message */}
                </Text>

                <CardSection>
                    {this.renderButton()}
                    {/* either shows Button or Spinner depending whether 'loading' is true/false */}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center', //centers text on screen
        color: 'red'
    }
};

export default LoginForm;
