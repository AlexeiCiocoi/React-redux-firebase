import React, { Component } from 'react'
import '../assets/common.scss'
import AutoComplite from '../components/Apps/AutoComplite/AutoComplite.jsx'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


class Home extends Component {

    constructor(props){
        super(props)
       
    }

  

    render(){
        
        const {posts} = this.props
        const postList = posts.length ? (
            posts.map(post=>{
                return(
                    <div key={post.id} className='card'>   
                        <Link to={'/' + post.id}><h2 className='card_title'>{post.title}</h2></Link>
                       
                        <div className='card_content'>{post.body}</div>   

                    </div>
                )
            })
        ):(
            <div>There are NO Posts</div>
        )
        return(
            <div>
                <AutoComplite />
                <div className='post_container'>
                    {postList}
                </div>
            </div>
            


        );
    }
}
const mapStateToProps = (state)=>{
    return {
         posts:state.posts
    }
}

export default connect(mapStateToProps)(Home)




