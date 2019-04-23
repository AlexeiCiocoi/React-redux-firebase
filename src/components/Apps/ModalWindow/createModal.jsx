import React from 'react'

export default class CreateModal extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if(this.props.isOpen) return <div className='modal_container'>{this.props.children}</div>
        return null
    }
}