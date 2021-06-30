import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadDataAsync} from '../actionCreator'

import CookBookUi from '../ui/CookBookUi'

@connect(
    (state)=>({
        list:state.cookbook.list
        
    }),
    (dispatch)=>({
        loadData(){
            dispatch(loadDataAsync())
        }
    })
)
 
 class CookBook extends Component {
    
    render() {
        return (
            <CookBookUi
              list={this.props.list}
            >
                
            </CookBookUi>
                
           
        )
    }


    componentDidMount(){
        this.props.loadData()
        
    }
    componentDidUpdate(){
        // console.log(this.props.list,'------------');
    }
}


export default CookBook 