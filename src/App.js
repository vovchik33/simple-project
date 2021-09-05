import React, {useState, useMemo} from "react";
import PostList from "./components/posts/post-list/PostList";

import './App.css';
import PostEditor from "./components/posts/post-editor/PostEditor";
import PostFilter from "./components/posts/post-filter/PostFilter";

function App() {
  const [chapterTitle] = useState("Title")
  const [posts, setPosts] = useState(
    [
      {
        title: "A Some Topic 1",
        text: "C First Some text about some topics"
      },
      {
        title: "C Some Topic 2",
        text: "B Some text about some topics"
      },
      {
        title: "B Another Topic 3",
        text: "A Another one text about some topics"
      }
    ].map((post, index) => ({...post, id: Date.now()+index}))
  );
  const [filter, setFilter] = useState({orderType: '', filterStr: ''})
  const sortedPosts = useMemo(
    () => filter.orderType
      ? [...posts].sort((a, b) => a[filter.orderType].localeCompare(b[filter.orderType]))
      : posts,
    [
      filter.orderType,
      posts
    ]
  );
  const sortedAndFilteredPosts = useMemo(
    () => sortedPosts.filter(
      (post) => post.title.toLocaleLowerCase().includes(filter.filterStr.toLocaleLowerCase())
        || post.text.toLocaleLowerCase().includes(filter.filterStr.toLocaleLowerCase())
    ),
    [
      filter.filterStr,
      sortedPosts
    ]
  );

  const addPost = (post) => {
    console.log(`Add post ${JSON.stringify(post)}`)
    setPosts([...posts, post]);
  };

  const removePost = (postId) => {
    console.log(`Remove post ${postId}`)
    setPosts([...posts.filter((item)=>(postId!==item.id))])
  };

  return (
    <div className="App">
      <PostEditor addPostComplete={addPost}/>
      <PostFilter
        filter={filter}
        onChange={setFilter}
      />
      <PostList
        title={chapterTitle}
        remove={removePost}
        posts={sortedAndFilteredPosts}
      />
    </div>
  );
}

export default App;
