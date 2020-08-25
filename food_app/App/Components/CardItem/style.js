const React = require("react-native");

const { StyleSheet, Dimensions } = React;
const { width } = Dimensions.get("window")

export default {

      textTab: {
        fontSize: 16,
        color: '#000'
      },
    
      listItem:{
        marginTop: 10,
        padding:10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor:"#FFF",
        flexDirection:"row",
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,  
     
      },
      CardItem:{
        width:width-20,
        paddingRight: 10,
        backgroundColor:'transparent', 
        flexDirection:'row', 
        borderColor:"#cccccc"
      },
      ContainerRight:{
        flex:1, 
        backgroundColor:'trangraysparent', 
        padding:10, 
        justifyContent:"space-between"
      },

      ImageCart:{
        width:width/4,
        height:width/4, 
        borderRadius: 10
      },
      TextTitle:{
        fontWeight:"bold", 
        fontSize:20
      },
      ItemRow: {
        flexDirection: 'row', 
        alignItems: 'center'
      },
      ContainerItem: {
        flexDirection:'row',
        justifyContent:'space-between'
      },
      ContainerDelivery: {
        flexDirection:'row', 
        alignItems:'center', 
        borderRadius: 20,
        padding: 5, 
        backgroundColor: '#FFA500'
      },
      

};