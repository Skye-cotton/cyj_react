import React from 'react';
import PropTypes from 'prop-types';
import memoize from "memoize-one";

import {
    Container
} from './StyledCookBook'

import Swiper from './Swiper'
import Search from '@c/search/Search'
import HotCate from './HotCate'
import Top10 from './Top10'




const CookBookUi =(props)=>{
    
    const swiper = memoize(list=> list.slice(0,5))
    const hostCate = memoize(list=> list.slice(0,10))
    // console.log(swiper,'+++++++++')
    //  const filterSwiper=swiper(props.list)
    //  console.log(filterSwiper);

    
    return (
        
        <Container >
            <header>吃貨大全</header> 
            <Swiper list={swiper(props.list)}></Swiper>
            <Search />
            <HotCate />
            <Top10 list={hostCate(props.list)}/>
        </Container>
        
    
    )
}

// 函数式组件绑定类型检查
CookBookUi.propTypes={
    list:PropTypes.array
}

export default CookBookUi