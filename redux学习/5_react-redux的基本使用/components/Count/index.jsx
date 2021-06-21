import React,{Component} from 'react'

export default class Count extends Component{
    state={count:0}
    increment=()=>{
        // console.log(this.selectNumber,'----------');
        const {value}=this.selectNumber
        this.props.add(value*1)
    }
    decrement=()=>{
        const {value}=this.selectNumber
        this.props.jian(value*1)
        
    }
    incrementOdd=()=>{
        const {value}=this.selectNumber
        if(this.props.count%2 !==0){
            this.props.add(value*1)
        }
        
    }
    incrementAsync=()=>{
        const {value}=this.selectNumber
        this.props.jiaAsync(value*1,500)
        
    }
    render(){
        return (
            <div>
                <h1>当前求和数为：{this.props.count}</h1>
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