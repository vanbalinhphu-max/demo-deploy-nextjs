"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setPosts } from "@/redux/slices/posts.slice";
import { useRef } from "react";

const PostsList = ({ initialPosts }) => {
  const dispatch = useAppDispatch();

  // Sử dụng useRef để đảm bảo logic khởi tạo 1 lần duy nhất
  const initialized = useRef(false);

  if (!initialized.current) {
    dispatch(setPosts(initialPosts));
    initialized.current = true;
  }

  const posts = useAppSelector((state) => state.posts.list);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
