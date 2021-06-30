import React, { Component } from 'react'

import './Search.css'

export default class Search extends Component {
    render() {
        return (
            <div id="s1">
                <div id="s2">
                    <svg t="1624614893212" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10907" width="200" height="200"><path d="M768 448a362.666667 362.666667 0 1 0-725.333333 0 362.666667 362.666667 0 0 0 725.333333 0z m-640 0a277.333333 277.333333 0 1 1 554.666667 0 277.333333 277.333333 0 0 1-554.666667 0z m739.925333 525.568l-194.304-196.949333 60.757334-59.904 194.304 196.949333-60.757334 59.904z" fill="#525A65" p-id="10908"></path></svg>
                    <span>今天想吃啥，搜一搜</span> 
                </div>
            </div>
        )
    }
}
