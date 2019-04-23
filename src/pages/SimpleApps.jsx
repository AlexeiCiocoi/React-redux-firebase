import React, { Component } from 'react'
import '../assets/common.scss'
import ToDo from '../components/Apps/toDoApp/ToDoMain.jsx'



export default class SimpleApps extends Component {

    constructor(){
        super()
    }

    render(){
        
        return(
            
            <ToDo />

        );
    }
}