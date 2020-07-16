import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  );
}

function Favorite() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favorite Screen</Text>
      </View>
    );
  }
  
  function Settings() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    );
  }

function CustomDrawerContent(props) {

    const paperTheme = useTheme();


  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
        
   
    <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
       
            <View style={{flexDirection:'row',marginTop: 15}}>
                <TouchableOpacity onPress={() => Linking.openURL('http://code-hunter.online/')}>
                    <Avatar.Image 
                        source={{
                            uri: 'https://code-hunter.online/images/school.png?bd3481fd44169b7650ec95dc1f01c563'
                        }}
                        size={50}
                    />
                </TouchableOpacity>
                <View style={{marginLeft:15, flexDirection:'column'}}>
                    <Text style={styles.title}>Code Hunter</Text>
                    <Text style={styles.textemail}>codehunter@gmail.com</Text>
                </View>
                
            </View>

            <Text style={styles.textfollow}>1k Follower</Text>
                        
        </View>

    </View>
    
    <DrawerItem 
        icon={({color, size}) => (
            <Icon 
            name="ios-home" 
            color='#000'
            size={size}
            />
        )}
        label="Home"
        onPress={() => {props.navigation.navigate('Home')}}
    />
    <DrawerItem 
        icon={({color, size}) => (
            <Icon 
            name="ios-search" 
            color='#000'
            size={size}
            />
        )}
        label="Search"
        onPress={() => {props.navigation.navigate('Search')}}
    />
    <DrawerItem 
        icon={({color, size}) => (
            <Icon 
            name="ios-heart" 
            color='#000'
            size={size}
            />
        )}
        label="Favorite"
        onPress={() => {props.navigation.navigate('Favorite')}}
    />
    <DrawerItem 
        icon={({color, size}) => (
            <Icon 
            name="ios-settings" 
            color='#000'
            size={size}
            />
        )}
        label="Settings"
        onPress={() => {props.navigation.navigate('Settings')}}
    />

      
    </DrawerContentScrollView>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Favorite" component={Favorite} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      marginBottom: 10,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      
      fontWeight: 'bold',
    },
    textemail: {
        marginTop: 5,
        fontSize: 12,
    },
    textfollow: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });