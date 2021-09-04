import React from "react";
import PostItem from "../post-item/PostItem";
import PostHeader from "../post-header/PostHeader";

function PostList({title, posts}) {
  return (
    <div className="post-list">
      <PostHeader title={title} />
      {
        posts.map((post) => {
          return (
            <PostItem {...post}/>
          )
        })
      }
    </div>
  )
}

export default PostList;