import React from 'react'
import {render} from 'react-dom'
import CreateToDo from './CreateToDo.jsx'
import ToDoItems from './ToDoItems.jsx'
import ToDoFillter from './ToDoFillter.jsx'
export default class ToDoMain extends React.Component{
    constructor(){
        super()
      
        this.state={
                FilterData:'todo',
                toDoData:this.getLocalStorageData(),
                todoFilterData:[],

        }

    //  binding methods 

         this.fethchData = this.fethchData.bind(this)
         this.changeToDoState = this.changeToDoState.bind(this)
         this.filterState = this.filterState.bind(this)
         this.getLocalStorageData = this.getLocalStorageData.bind(this)

    }

    
   

    // Methods
    getLocalStorageData(){
        let localData = JSON.parse(localStorage.getItem('localArr'))
        
        let arr=[];
        if(localData){
             arr = localData
        }else{
            arr = []
        }
        return arr
    }
    
    fethchData(data){
        let arr = [] 
        let storage = JSON.parse(localStorage.getItem('localArr'))
        if (storage){
           arr =  storage
        } 
       
        if(data){
            this.setState({
                toDoData:[...this.state.toDoData,data]
            },()=>{
                arr.push(data)
            
                localStorage.setItem('localArr',JSON.stringify(arr))
            
            })

        }else{
            return
        }
       
    }

    changeToDoState(_id,toggle){
        let newArr = []
        let deletedItemsArr  =  JSON.parse(localStorage.getItem('deleted')) || [];
        for(let item of this.state.toDoData){
            let getIdToRemove = null
            if(item.id === _id){
                item.state = toggle
                if(toggle === 'remove'){
                    getIdToRemove = item.id
                    deletedItemsArr.push(item)
                    localStorage.setItem('deleted',JSON.stringify(deletedItemsArr))
                }
            }
            if(!getIdToRemove){
                 newArr.push(item)

                 
            }
        }
        this.setState({
            toDoData:newArr
        })
        
        localStorage.setItem('localArr',JSON.stringify(newArr))
    }

    filterState(val){
        this.setState({
            FilterData:val
        })
    }


    render(){
       
        return(
            <div  className='todo_container'>
                <h1>Create Youre To Do List</h1>
                <div>
                    <CreateToDo getNewData={this.fethchData} />
                    <ToDoFillter getFilterState={this.filterState}  />
                        <div className='todo_items-conatiner'>
                        {this.state.toDoData.map((item)=>{
                           if(item.state === this.state.FilterData){
                                return(
                                    <ToDoItems key={item.id} idNum={item.id} passData={item} getIdNumbers={this.changeToDoState} />
                                 )
                           }
                           
                        
                        })}
                            
                        </div>
                </div>
               

            </div>
            


        )

    }
}