/**
 * 该文件专门为count组件生成action对象
 * 
 */

import store from './store'
import {INCREMENT,DECREMENT} from './constant'
export const createIncrementAction=data=> ({type:INCREMENT,data})
export const createDecrementAction=data=> ({type:DECREMENT,data})
//异步的action，就是指action的值为函数
export const createIncrementAsyncAction=(data,time)=>{
    return ()=>{
        setTimeout(()=>{
            store.dispatch(createIncrementAction(data))
        },time)
    }
}