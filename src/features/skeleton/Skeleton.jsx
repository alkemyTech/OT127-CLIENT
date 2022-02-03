import React from "react";

const Skeleton = ({ mode }) => {
  
  return (
    <div>
      {mode === "card" && <div className='skeleton-card'></div>}
      {mode === "list" && <div className='skeleton-list'></div>}
      {mode === "image" && <div className='skeleton-image'></div>}
    </div>
  );
};

export default Skeleton;
