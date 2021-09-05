import React from "react";
import PostItem from "../post-item/PostItem";
import PostHeader from "../post-header/PostHeader";

import styles from "./PostList.module.css";

function PostList({title, posts, remove}) {
  return (
    <div className={styles.posts__list}>
      <PostHeader title={title} />
      {
        posts.map((post, index) => {
          return (
            <PostItem remove={remove} key={post.id} index={index+1} {...post}/>
          )
        })
      }
    </div>
  )
}

export default PostList;