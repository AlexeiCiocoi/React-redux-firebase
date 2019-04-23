import React from 'react'
import { get } from 'https';
import CreateModal from './createModal.jsx'
export default class ModalWindow extends React.Component{

    constructor(props){
        super(props)
        this.state={
            open:false
        }

        this.openModal = this.openModal.bind(this)
    }

    openModal(){
       this.setState({open:!this.state.open})

    }
    

    render(){
        return(
            <div>
                <div className='item' id='modal_1'onClick={()=>{this.openModal()}}>    
                    <img src="../src/img/frut2.jpg" alt=""/>
                </div>
                
                <CreateModal isOpen={this.state.open}>
                   <div className='modal_wrapper'>
                        <div className='my_btn modal_close-btn ' onClick={()=>{this.openModal()}}>X</div>
                        <div className='modal_content'>

                        <div><img src="../src/img/frut2.jpg" alt=""/></div>
                        <div>
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid vitae excepturi non dolores est perferendis quo laudantium nemo ea unde?</p>
                        </div>
                            
                            

                        </div>
                   </div>
                </CreateModal>
 
            </div>
            
           
        )
    }
}