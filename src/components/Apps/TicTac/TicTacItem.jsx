// import React from "react"


// export default class TicTacItem extends React.Component{

//     constructor(props){
//         super(props)
//         this.state={
//             turn:'X',
//             GameEnd:false
//         }

//         this.clickedElement = this.clickedElement.bind(this)
//     }

//     clickedElement(e){
//         e.target.innerText = this.state.turn
//         this.setState({turn:this.state.turn == 'X' ? 'O' : 'X'})
//     }

//     render(){

//         return(
//             <div className='tic-tac_main' onClick={(e)=>{this.clickedElement(e)}}>
//                 <div className="square"></div>
//                 <div className="square"></div>
//                 <div className="square"></div>
//                 <div className="square"></div>
//                 <div className="square"></div>
//                 <div className="square"></div>
//                 <div className="square"></div>
//                 <div className="square"></div>
//                 <div className="square"></div>
//             </div>
//         )
//     }

// }