const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_NUMBER': 
        return  {...state , count : state.count + action.payload };
      case 'SET_DELTA': 
        return  {...state , delta : state.delta + action.payload };
      case 'RESET_DELTA': 
        return  {...state , delta : 0};
      case 'RESET_COUNT': 
        return  {...state , count : 0};
      default :
        return state;
    }
  }

  export default reducer