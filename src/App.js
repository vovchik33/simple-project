import React, {useState} from "react";
import Counter from "./components/simple/counter/Counter";
import Editor from "./components/simple/editor/Editor";
import PostList from "./components/posts/post-list/PostList";

import './App.css';
import PostEditor from "./components/posts/post-editor/PostEditor";

function App() {
  const [posts] = useState({
    title: "Hello",
    posts: [
      {
        title: "Some Topic",
        text: "Some text about some topics"
      },
      {
        title: "Some Topic",
        text: "Some text about some topics"
      },
      {
        title: "Another Topic",
        text: "Another one text about some topics"
      }
    ]
  });
  const [otherPosts] = useState({
    title: "List of other posts",
    posts: [
      {
        title: "Some Topic",
        text: "Some text about some topics"
      },
      {
        title: "Another Topic",
        text: "Another one text about some topics"
      }
    ]
  });
  return (
    <div className="App">
      <Counter />
      <Editor/>
      <PostEditor/>
      <PostList {...posts}/>
      <PostList {...otherPosts}/>
    </div>
  );
}

export default App;
