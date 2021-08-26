import { render } from "@testing-library/react"
import React, {Component} from 'react'

export default class Timer extends Component{

    state = {
        seconds: 10,
    }
    
    const {myTimer} = this.state
    this.myInterval = setInterval(() => {
    const { myTimer } = this.state

    if(myTimer>0){
        this.setState(({myTimer}) => ({
        myTimer: myTimer -1
        }))
    }, 1000)
)

    render(){
        return(
            <div>
                <h1 className={'timer'} >{myTimer===0?<h1>Time's Up!</h1>: {myTimer}}</h1>
            </div>
    }
}