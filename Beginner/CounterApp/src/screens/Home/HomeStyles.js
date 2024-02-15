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

    },
    two_reset_button_container:{
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',       

    },
    two_delta_buttons_container:{
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',       

    }
});

export default styles;
