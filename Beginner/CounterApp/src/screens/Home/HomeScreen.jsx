import { View} from 'react-native';
import { Text } from 'react-native-paper';
import React,{useReducer} from 'react'
import { ButtonIcon, CountIcon, DeltaButton, ResetButton  } from '../../components/Components';
import styles from './HomeStyles';
import reducer from '../../reducers/countReducer';

const Home = () => {

  const [state,dispatch] = useReducer(reducer,{count :0, delta: 0, max : 0, min : 0})
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <CountIcon  count={state.count}/>

      <View  style={styles.two_button_container}>
      <ButtonIcon image={require('../../../assets/images/minus-sign.png')}
                  pressHandler={()=>{dispatch({type:'SET_NUMBER',payload : -1 * state.delta})}}
                  />
      <ButtonIcon image={require('../../../assets/images/plus-sign.png')}
                  pressHandler={()=>{dispatch({type:'SET_NUMBER',payload :state.delta})}}
                  />
      </View>
      <CountIcon  count={state.delta}/>

<View style={styles.two_delta_buttons_container}>
<DeltaButton  sign="-" pressHandler={()=>{dispatch({type:'SET_DELTA',payload:-1})}}
              color="red"/>
<DeltaButton  sign="+" pressHandler={()=>{dispatch({type:'SET_DELTA',payload:1})}}
              color="green"/>
</View>

      <View  style={styles.two_reset_button_container}>
      <ResetButton  title="RESET COUNT"
                    pressHandler={()=>{dispatch({type:'RESET_COUNT',payload : -1 * state.delta})}} />
      <ResetButton  title="RESET DELTA"
                    pressHandler={()=>{dispatch({type:'RESET_DELTA',payload :state.delta})}} />
      </View>
    </View>

  )
}

export default Home;

