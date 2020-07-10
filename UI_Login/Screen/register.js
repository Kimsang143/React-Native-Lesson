import React from 'react';
import { View, Text, StyleSheet, Image ,StatusBar,SafeAreaView, TouchableOpacity, TextInput,Dimensions } 
from 'react-native';
const windowWidth = Dimensions.get('window').width;
const Register = ({ navigation }) => {
    return (
     
      <View  style={styles.container}>
      <SafeAreaView forceInset={{ top: 'never' }}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
      </SafeAreaView>
      <View>
        <View style={styles.buttonstyleback}>
        <TouchableOpacity 
            onPress={() => navigation.navigate('Introduction')}>
            <Image
            style={styles.tinyLogo}
            source={{
                uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png',
            }}
        />
        </TouchableOpacity>
        </View>
        
        <View style={styles.padingstyle}>
            <Text style={styles.textheader}>Hello!</Text>
            <TextInput
                style={{ height: 50, width: windowWidth-30, borderColor: 'gray', borderWidth: 0, marginTop: 30,borderRadius: 10 , backgroundColor: '#F4E9E9', padding: 10}}
                placeholder="ui_design@gmail.com"
                placeholderTextColor="#000"
            />

            <TextInput
                style={{ height: 50, width: windowWidth-30, borderColor: 'gray', borderWidth: 0, marginTop: 10,borderRadius: 10, backgroundColor: '#F4E9E9', padding: 10}}
                placeholder="*********"
                placeholderTextColor="#000"
            />

            <TextInput
                style={{ height: 50, width: windowWidth-30, borderColor: 'gray', borderWidth: 0, marginTop: 10,borderRadius: 10, backgroundColor: '#F4E9E9', padding: 10}}
                placeholder="*********"
                placeholderTextColor="#000"
            />
            <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                style ={styles.buttonStyle}>
                <Text style ={styles.textBlod}>Register</Text>
            </TouchableOpacity>

    
        </View>
        
            
      </View>

        <View style={{flex: 1, flexDirection: 'column-reverse', marginBottom: 40}}>
            <View style={styles.padingstylebelow}>
                <Text style={styles.textbelow}>You are not a account! </Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: 'red', fontSize: 16, fontWeight: '600'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
    );
};

export default Register;

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
    tinyLogo: {
        width: 32,
        height: 32,
    },
    buttonstyleback: {
        marginTop: 20,
        marginLeft: 10
    },
    padingstyle: {
        marginTop: 100,
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
        color: '#110A48',
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