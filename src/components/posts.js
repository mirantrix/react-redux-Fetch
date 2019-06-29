import React, { Component } from 'react'


class Posts extends Component{

    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json() )
        .then( data => this.setState({posts: data}))
        .catch( err => console.log(err) );
    }

    render() {
        const postItems = this.state.posts.map((item) => (
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

export default Posts; 