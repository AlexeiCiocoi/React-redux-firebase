import React from 'react'
// import AutoComResult from './AutoComResult.jsx'
import Data from '../../../assets/autoCompliteData.jsx'



export default class AutoComplite extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:false,
            innerText:'',
            suggestions:[],
            active:''
        }
      
        this.inputRef = React.createRef()
        this.getValues = this.getValues.bind(this)
        this.renderResult = this.renderResult.bind(this)
        this.getItemValue = this.getItemValue.bind(this)
        this.handleArrows = this.handleArrows.bind(this)

    }
        getValues(e){
            let value = e.target.value
            if(!value==''){
                let regex = new RegExp(`^${value}`,'i')
                let suggestions = Data.sort().filter(v=> regex.test(v))
                this.setState({filteredData:suggestions,innerText:e.target.value})
                 
            }else this.setState({innerText:'',filteredData:[]})
             
        }

      

        renderResult(){
        
            let newArr = this.state.filteredData.map((item,index)=>{
                return <li className={this.state.active} onClick={(e)=>{this.getItemValue(e)}} key={index}>{item}</li>
            })
            return newArr
        }
    
    
        getItemValue(e){
            
            let value = e.target.textContent
            this.setState({innerText:value,filteredData:[]})
            
        }

        handleArrows(){

        }


    render(){
       const {innerText} = this.state
        return(

            <div className='auto-complite_wrapper'>
                <h1>Auto Complite</h1>
                <input onKeyPress={this.handleArrows} value={innerText} ref={this.inputRef} onChange={(e)=>{this.getValues(e)}} type="text"/>
                <ul >
                    {this.state.filteredData ? this.renderResult():null }
                </ul>
               
                
            </div>
        )
    }
}