import React from 'react'
import {render} from 'react-dom'




export default class ToDoMain extends React.Component{
    constructor(props){
        super(props)

       

        this.toDoSetImage = this.toDoSetImage.bind(this)
    }

    toDoSetImage(val){
        let imageUrl
        
        switch(val){
            case 'todo': imageUrl=  '../src/img/work.svg'
                break;
            case 'done': imageUrl = '../src/img/check-symbol.svg'
                break;
            case 'important': imageUrl= '../src/img/important.png'
                break;
        }
        
        return imageUrl
        
    }

    render(){
        
       
        let todoSettings = [
        {
            name:'Complite',
            toggle:'done',
            class:'todo_complite'
            
        },
        {   
            name:'Delite',
            toggle:'remove',
            class:'todo_delite'

        },
        {
            name:'Important',
            toggle:'important',
            class:'todo_important'
        }
           
        
        ]
        let idNumber = this.props.idNum
        
        

        
        return(
           
            <div className='todo_container-item'>
                <div className='flexed'>
               
                     <img src={this.toDoSetImage(this.props.passData.state)} alt=""/>
                  
                    <p>{this.props.passData.text}</p>
                </div>
               
                <div className='todo_settings'>
                    {todoSettings.map(item=>{
                        return(
                            <div onClick={()=>{this.props.getIdNumbers(idNumber,item.toggle)}} className={item.class} key={item.toggle}>{item.name}</div>
                        )
                         
                    })}

                </div>
            </div>

        )
    }
}