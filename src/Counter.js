import React from 'react';
import {connect} from 'react-redux';
import {Increase,Decrease} from './Actions';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }

    increment(e){
        this.props.dispatch(Increase(this.state.count))
    }
    decrement(e){
        this.props.dispatch(Decrease(this.state.count))
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}> Increment </button>
                <p> {this.state.count}</p>
                <button onClick={this.Decrement}> Decrement </button>
            </div>
        )
    }

    mapStateToProps=(state)=>{
        return {
            count:state.count
        };
    }

}

export default Counter;