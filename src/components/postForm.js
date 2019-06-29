import React, { Component } from 'react'


class PostForm extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            body: ''
        };
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const postData = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then( data => console.log(data))

    }

    render() {
        return (
            <div>
                <h1>ADD POST</h1>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <label>Title</label><br/>
                        <input type='text' name='title' value={ this.state.title } onChange = { this.onChange }/>
                    </div>
                    <div>
                        <label>Body</label><br/>
                        <textarea name='body' value={ this.state.body } onChange = { this.onChange }/>
                    </div><br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm; 