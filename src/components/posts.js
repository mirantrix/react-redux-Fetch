import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost }  from '../actions/postAction';


class Posts extends Component{
    componentWillMount() {
        this.props.fetchPost();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map((item) => (
            <div key={item.id}>
                <h3>{ item.title}</h3>
                <p>{ item.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>POSTS</h1>
                {postItems}
            </div>
        )
    }
} 



const mapStateToProps = (state) => ({
    posts: state.postReducer.items,
    newPost: state.postReducer.item
});
  


export default connect(mapStateToProps, {fetchPost} )(Posts); 