import React from "react";
import { IPost } from "../../../types/posts";
import PostCard from "./card/post-card.component";
import "./timeline.style.css";

interface TimelineProps {
  posts: IPost[];
}

export default function Timeline({ posts }: TimelineProps) {
  return (
    <section className="timeline">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
