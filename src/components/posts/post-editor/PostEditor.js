import React, {useState} from 'react';
import PostButton from "./post-button/PostButton";

const PostEditor = () => {
  const [post, setPost] = useState({title: 'sss', text: 'ttt'})

  const addPost = (e) => {
    e.preventDefault();
    console.log(post);
  }

  return (
    <form>
      <input
        value={post.title}
        placeholder="Title"
        type="text"
        onChange={(e) => setPost({...post, title: e.target.value})}
      />
      <input
        value={post.text}
        placeholder="Text"
        type="text"
        onChange={(e) => setPost({...post, text: e.target.value})}
      />
      <PostButton onClick={addPost}>Add Post</PostButton>
    </form>
  );
};

export default PostEditor;
