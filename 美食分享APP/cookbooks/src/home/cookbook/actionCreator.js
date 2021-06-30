import { LOADDATA } from "./actionTypes"

import {get} from '@u/http.js'

const loadDataSync =list=>{
    return {
        type:LOADDATA,
        list
    }
}

const loadDataAsync =()=>{
    return async (dispatch)=>{
        let result= await get(
            '/api/list'
        )
        console.log(result);
        dispatch(loadDataSync(result.data.data))
    }
}

export {
    loadDataSync,loadDataAsync
}