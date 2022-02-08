import React, { useState } from "react";
import NewsList from "./NewsList";
import Comments from "./Comments";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

const News = () => {
  const [showComments, setShowComments] = useState(false);
  useBottomScrollListener(() => setShowComments(true));
  return (
    <div>
      <h1>Novedades</h1>
      <NewsList />
      {showComments && <Comments />}
    </div>
  );
};

export default News;
