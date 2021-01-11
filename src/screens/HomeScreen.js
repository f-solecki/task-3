import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: null
        };
    }
    componentDidMount() {
        this.setState({ uri: this.props.navigation.state.params.data })
    }
    render() {

        return (<View style={{ flex: 1 }}>
            <ImageBackground source={{ uri: this.state.uri }} style={styles.image} >
                <Text style={styles.text}>HomeScreen</Text>
                <Button title='Open Camera to change the photo' onPress={() => this.props.navigation.navigate('Camera')} />
            </ImageBackground>
        </View>)
    }
}
const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
export default HomeScreen