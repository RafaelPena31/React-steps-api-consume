import React from "react";
import { IPost } from "../../../../types/posts";
import "./post-card.style.css";

interface PostCardProps {
  post: IPost;
}

export default function PostCard({ post }: PostCardProps) {
  const { body, title, userId, id } = post;

  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{body}</p>
      <div className="post-info">
        <p>userId: {userId}</p>
        <p>id: {id}</p>
      </div>
    </div>
  );
}
