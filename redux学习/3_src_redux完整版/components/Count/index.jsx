import React,{Component} from 'react'
import store from '../../redux/store'
//引入actionCreate ，专门用于创建action对象
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'
export default class Count extends Component{
    state={count:0}
    increment=()=>{
        // console.log(this.selectNumber,'----------');
        const {value}=this.selectNumber
        store.dispatch(createIncrementAction(value*1))
    }
    decrement=()=>{
        const {value}=this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    incrementOdd=()=>{
        const {value}=this.selectNumber
        const count=store.getState()
        if(count%2 !== 0){
            store.dispatch(createIncrementAction(value*1))
        }
        
    }
    incrementAsync=()=>{
        const {value}=this.selectNumber
        setTimeout(()=>{
            store.dispatch(createIncrementAction(value*1))
        },1000)
        
    }
    render(){
        return (
            <div>
                <h1>当前求和数为：{store.getState()}</h1>
                <select ref={c=>this.selectNumber=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementOdd}>奇数的时候加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步的时候加</button>&nbsp;
            </div>
        )
    }
}