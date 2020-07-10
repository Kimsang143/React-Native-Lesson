import React from 'react';
import { View, Text, StyleSheet, ImageBackground,StatusBar,SafeAreaView, TouchableOpacity } 
from 'react-native';
const Introduction = ({ navigation }) => {
    return (
     
      <ImageBackground source={require('../image/ic_background.png')} style={styles.image}>
      <SafeAreaView forceInset={{ top: 'never' }}>
        <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
      </SafeAreaView>
      <View style={styles.container}>

        <View style={styles.padingstyle}>
            <Text style={styles.textheader}>Welcome!</Text>
            <Text style={styles.textnomal}>Nice to see you</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                style ={styles.buttonStyle}>
                <Text style ={styles.textBlod}>Login</Text>
            </TouchableOpacity>
            
        </View>
        <View style={{flex: 1, flexDirection: 'column-reverse', marginBottom: 40}}>
            <View style={styles.padingstylebelow}>
                <Text style={styles.textbelow}>You are not a account! </Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={{color: 'red', fontSize: 16, fontWeight: '600'}}>Register</Text>
                </TouchableOpacity>
            </View>
            
        </View>
            
      </View>

        </ImageBackground>
    );
};

export default Introduction;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    padingstyle: {
        marginTop: 40,
        marginLeft: 15
    },
    textnomal:{
        color: '#fff',
        fontSize: 18
    },
    textBlod:{
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    textheader :{
        color: '#fff',
        fontSize: 42
    },
    buttonStyle:{
        height: 50,
        width:160,
        borderRadius:20,
        backgroundColor : "#A415BE",
        marginTop :20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    padingstylebelow: {
        marginTop: 15,
        marginLeft: 15,
        flexDirection: 'row'
    },
    textbelow:{
        fontSize: 16,
    }

});