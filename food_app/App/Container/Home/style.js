const React = require("react-native");

const { StyleSheet, Dimensions } = React;
const { width } = Dimensions.get("window")

export default {

    container: {
        flex: 1,
      },
      header: {
        alignItems:'center',
        marginBottom: 10,
      },
      textHeader: {
        fontSize: 18
      },
     
      listTab: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        borderWidth: 0.5,
        borderColor: '#D1C9C7',
        borderRadius: 20,
      },
      btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 20,
        
      },
      textTab: {
        fontSize: 16,
        color: '#000'
      },
      btnTabctive: {
        backgroundColor: '#FFA500'
      },
      textTabative: {
        color: '#fff'
      },

};