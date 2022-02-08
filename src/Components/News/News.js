import React, { useState } from "react";
import NewsList from "./NewsList";
import Commentaries from "./Commentaries";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

const News = () => {
  const [showCommentaries, setShowCommentaries] = useState(false);
  useBottomScrollListener(() => setShowCommentaries(true));
  return (
    <div>
      <h1>Novedades</h1>
      <NewsList />
      {showCommentaries && <Commentaries />}
    </div>
  );
};

export default News;
