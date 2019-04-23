import React, { Component } from 'react'
import '../assets/common.scss'
import TicTac from '../components/Apps/TicTac/TicTacMain.jsx'



export default class Games extends Component {

    constructor(){
        super()
    }

    render(){
        
        return(
            
            <TicTac />

        );
    }
}



