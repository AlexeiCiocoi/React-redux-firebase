import React from 'react'


import '../assets/common.scss'


export default class Myinfo extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    render(){
        
        return(
            <div>
                <h1>{this.props.info.name}</h1>
                <p>{this.props.info.about}</p>
                <ul>
                    {this.props.info.vacations.map((vacation,i)=>{
                        return <li key={i}>{vacation}</li>
                       
                    })}
                </ul>
            </div>


        )
    }


}