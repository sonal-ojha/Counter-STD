export const CounterReducer = ( state ={count:0}, action ) => {
    /*console.log(action);*/
    switch(action.type){
        case 'INCREMENT':
            /*console.log('Increment reducer',state.count);*/
            return Object.assign({},state,{count:state.count+1})
        case 'DECREMENT':
            /*console.log('reducer',state.count);*/
        return Object.assign({},state,{count:state.count-1})
        default:
            return state;
    }
    
}