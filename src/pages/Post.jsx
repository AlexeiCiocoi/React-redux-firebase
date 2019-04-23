import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { deletePost } from '../assets/actions/postActions.jsx'


class Post   extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

   handleClick(){
       this.props.deletePost(this.props.post.id)
       this.props.history.push('/');
   }

    render(){
     
        const item = this.props.post ? (
            <div>
               
                <h1>{this.props.post.title}</h1>
                <div>{this.props.post.body}</div>
                <div><button className='my_btn' onClick={this.handleClick}>Delete Post</button></div>
            </div>
        ):(
            <div>Post not Found </div>
        )
        return(
           <div>{item}</div>
        )
    }
}

const mapPropsToState = (state,ownProps)=>{
    let id = ownProps.match.params.post_id
    return {
          post:state.posts.find(post=> post.id == id)
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        deletePost: (id)=>{
            dispatch(deletePost(id))
        }
    }
}


export default connect(mapPropsToState,mapDispatchToProps)(Post)