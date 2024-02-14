import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'skyblue',
        flex:1
    },
    title:{
        fontSize:50,
        fontStyle:'italic',
        marginTop: 40,
        alignSelf:'center',
        justifyContent:'center'
    },
    two_button_container:{
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'space-evenly'

    }
});

export default styles;
