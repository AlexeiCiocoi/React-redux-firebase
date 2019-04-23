import React from 'react'


export default class ToDoMain extends React.Component{

    constructor(props){
        super(props)
        this.state={
            filterInfo:[
                {
                    name:'InWork',
                    filterState:'todo',
                    id:'1'

                },
                {
                    name:'Complite',
                    filterState:'done',
                    id:'2'

                },
                {
                    name:'Important',
                    filterState:'important',
                    id:'3'

                },
            ]
        }
    }



    render(){
     

        return(

            <div className='todo_filter-bar'>
                {this.state.filterInfo.map(item=>{
                    return <div onClick={()=>{this.props.getFilterState(item.filterState)}} key={item.id} className='my_btn'>{item.name}</div>
                    
                })}
                
              
                
            </div>
        )
    }
}