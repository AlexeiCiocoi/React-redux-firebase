import React from 'react'


export default class Jokes extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
       
        return(
            
            <div>
                    {this.props.question ? 
 
                    <div>
                        <h1>Question: {this.props.question}</h1>
                        <h1>Answer: {this.props.punchLine}</h1>
                    </div>

                    :<h1 style={{color:"#435489"}}>Joke: {this.props.punchLine}</h1>
                    
                    
                }
            </div>
            

        )
    }

}