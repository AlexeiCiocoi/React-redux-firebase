import React, { Component } from 'react'
import {NavLink } from 'react-router-dom'


export default class Navigation extends Component {

    constructor(){
        super()
    }

    render(){
        
        return(
             
                <div className='navigation'>
                    <div className='navigation_items-holder'>
                        <NavLink exact activeClassName="active" className='navigation_item' to='/'>Home</NavLink>
                        <NavLink exact activeClassName="active" className='navigation_item' to='/about' >About</NavLink>
                        <NavLink exact activeClassName="active" className='navigation_item' to='/games' >Games</NavLink> 
                        <NavLink exact activeClassName="active" className='navigation_item' to='/apps' >Apps</NavLink>
                    </div>
                    
                </div>
            
          

        );
    }
}

