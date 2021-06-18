/**
 * 1.该文件是用于创建一个为count组件服务的reducer，reducer的本质就是一个函数
 * 2.reducer函数会接到两个参数，分别是之前的状态preState，动作对象action
 */

import {INCREMENT,DECREMENT} from './constant'
const init=0
export default function countReducer(preState=init,action){
    const {type,data}=action
    switch (type) {
        case INCREMENT:
            return preState+data
        case DECREMENT:
            return preState-data   
    
        default:
            return preState;
    }
} 