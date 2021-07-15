import { StyleSheet } from "react-native";  

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#00C2FF',
        alignItems:'center',
        justifyContent:'center'
    },
    cardView:{
        width:'100%',
        height:'70%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF',
        borderRadius:10,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#00C2FF',
        marginTop:20,
    },
    passwordContainer:{
        width:'100%',
        height:'70%',
        alignItems:'center',
        justifyContent:'center',
    },
    completeText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000000',
        marginTop:50,
        marginBottom:20,
    },
    image:{
        marginVertical:20
    },
    des:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000000',
        textAlign:'center',
    },
})

export default styles