import { View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import React,{useReducer} from 'react'
import { ButtonIcon, CountIcon } from '../../components/Components';
import styles from './HomeStyles';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NUMBER': 
      return  {...state , count : state.count + action.payload };
    case 'SET_DELTA': 
      return  {...state , delta : state.delta + action.payload };
    case 'RESET': 
      return  {...state , count : 0, delta : 0};
    default :
      return state;
  }
}



const Home = () => {
  const [state,dispatch] = useReducer(reducer,{count :0, delta: 0, max : 0, min : 0})
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <CountIcon  count={state.count}/>
      <Image   style={{height:40,width:40,alignSelf:'center', marginTop:60}}source={require('../../../assets/images/delta.jpg')}/>
<Text style={{fontSize:20}}>{state.delta}</Text>

<Button 
onPress={()=>{dispatch({type:'SET_DELTA',payload:-1})}}
style={{width:10,heigth:20,backgroundColor:'red'}}>
  <Text>sub</Text>
</Button>

<Button 
onPress={()=>{dispatch({type:'SET_DELTA',payload:1})}}
style={{width:10,heigth:20,backgroundColor:'green'}}>
  <Text>add</Text>
</Button>



      <View  style={styles.two_button_container}>
      <ButtonIcon image={require('../../../assets/images/minus-sign.png')}
                  pressHandler={()=>{dispatch({type:'SET_NUMBER',payload : -1 * state.delta})}}
                  />
      <ButtonIcon image={require('../../../assets/images/plus-sign.png')}
                  pressHandler={()=>{dispatch({type:'SET_NUMBER',payload :state.delta})}}
                  />
      </View>
    </View>
  )
}

export default Home;

