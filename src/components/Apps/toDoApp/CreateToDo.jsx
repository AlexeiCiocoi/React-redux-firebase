import React from 'react'
import {render} from 'react-dom'
import {
    Todo
} from './Todo'

export default class CreateToDo extends React.Component{
    constructor(props){
        super(props)
        this.state={
                inputValue:'',
                error:false
            }
        

        //  binding methods 

        this.getInputValue = this.getInputValue.bind(this)
        this.passingDataToParent = this.passingDataToParent.bind(this)
    }

    // Methods

    getInputValue(e){
        this.setState({
            inputValue:e.target.value
        },()=>{
            
        })
    }


    passingDataToParent(){
        let newData

        if(this.state.inputValue.length<5){
            newData = false
            this.setState({
                inputValue:this.state.inputValue,
                error:true
            })
        }else{
            newData = {
                id:Math.random(100),
                state:'todo',
                text:this.state.inputValue,
                show:true
                
            }
            this.setState({
                inputValue:'',
                error:false
            })

        }
      
       this.props.getNewData(newData)
       
      
    }



    render(){
        
        return(
            <div className='todo_app-header'>
                {this.state.error ? <div className='input_error'> Please Fill Min imum 5 Characters</div>: false}
                <input value={this.state.inputValue} onChange={this.getInputValue}  className='todo-text-input ' type="text"/>
                <div onClick={this.passingDataToParent} className='my_btn'>Create</div>
            </div>
        )
    }
}