import React, {useState} from "react";
import Counter from "./components/simple/counter/Counter";
import Editor from "./components/simple/editor/Editor";
import PostList from "./components/posts/post-list/PostList";

import './App.css';

function App() {
  const [posts] = useState({
    title: "Hello",
    posts: [
      {
        title: "Topic 1",
        text: "Some text about some topics"
      },
      {
        title: "Topic 2",
        text: "Another one text about some topics"
      }
    ]
  })
  return (
    <div className="App">
      <Counter />
      <Editor/>
      <PostList {...posts}/>
    </div>
  );
}

export default App;
