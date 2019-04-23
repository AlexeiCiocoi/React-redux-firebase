import React from 'react'
import {render} from 'react-dom'
import Routers from '../routers/Routers.jsx'

import '../assets/common.scss'

export default class App extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row">
               <div className="container">
                    <h1>App 2</h1>
                    <p>frfreferf</p>
               </div>
            </div>
        );
    }
}

render(<Routers/>, document.getElementById('app'))