import React, { Component } from 'react'
import {render} from 'react-dom'
import {BrowserRouter , Route , Switch} from "react-router-dom"
import '../assets/common.scss'

import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Games from '../pages/Games.jsx'
import SimpleApps from '../pages/SimpleApps.jsx'
import Error from './Apps/Error.jsx'
import Navigation from './Apps/Navigation.jsx'
import Post from '../pages/Post.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/rootReducer.jsx'

const store = createStore(rootReducer);


export default class App extends Component {

    constructor(){
        super()

    
    }


    render(){
        
        return(
           <div>
              
               <BrowserRouter>
                <div>
                    <Navigation />
                    <div className='todo_wrapper'>
                        <Switch>
                            <Route path='/' component={Home} exact/>
                            <Route path='/about' component={About}/>
                            <Route path='/games' component={Games}/>
                            <Route path='/apps' component={SimpleApps}/>
                            <Route exact path='/:post_id' component={Post}/>
                            <Route  component={Error}/>
                            

                        </Switch>

                    </div>
                    

                </div>              
               </BrowserRouter>        

             
           </div>
          
        );
    }
}

render(<Provider store={store}><App /></Provider>, document.getElementById('app'))  












{/* <FilterApp /> */}