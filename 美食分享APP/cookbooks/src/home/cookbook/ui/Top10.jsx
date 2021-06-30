import React, { Component } from 'react'
import {Top10wrap} from './StyledCookBook'
import PropTypes from 'prop-types'



const Top10 =(props)=>{
    return (
        <Top10wrap>
            <h1>精品推荐</h1>
            <ul>
                {
                    props.list.map(value =>{
                        return (
                            <li key={value.id}>
                                <div>
                                    <img src={value.img} alt="" />
                                </div>
                                <div>
                                    <p>{value.name}</p>
                                    <p><span>{value.all_click}</span>浏览 <span>{value.favorites}</span>收藏</p>
                                </div>
                            </li>
                
                        )
                    })
                }
            </ul>
        </Top10wrap>
    )
}

Top10.propTypes ={
    list:PropTypes.array
}
 
export default Top10