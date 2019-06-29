import React from 'react';
import './App.css';
import Posts from './components/posts';
import PostForm from './components/postForm';
import { statement } from '@babel/template';

function App() {
  return (
    <div className="App">
     <PostForm/>
     <hr/>
     <Posts/>
    </div>
  );
}

export default App;
