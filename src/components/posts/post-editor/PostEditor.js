import React, {useMemo, useState} from 'react';
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";

const PostEditor = ({addPostComplete}) => {
  const [post, setPost] = useState({title: 'sss', text: 'ttt'})
  const disabled = useMemo(
    () => !post.text || !post.title,
    [
      post.title,
      post.text
    ]
  )

  const addPost = (e) => {
    addPostComplete({...post, id: Date.now()});
    clearEditor();
  }

  const clearEditor = () => setPost({...post, title: '', text: ''});

  return (
    <form>
      <Input
        value={post.title}
        placeholder="Title"
        type="text"
        onChange={(e) => setPost({...post, title: e.target.value})}
      />
      <Input
        value={post.text}
        placeholder="Text"
        type="text"
        onChange={(e) => setPost({...post, text: e.target.value})}
      />
      <Button disabled={disabled} onClick={addPost}>Add Post</Button>
    </form>
  );
};

export default PostEditor;
