import React from "react";

const Skeleton = ({ mode }) => {
  return (
    <div>
      {mode === "singleCard" && (
        <div className="skeleton_card_container">
          <div className="skeleton_card"></div>
        </div>
      )}
      {mode === "groupCards" && (
        <div className="skeleton_card_container">
          <div className="skeleton_card"></div>
          <div className="skeleton_card"></div>
          <div className="skeleton_card"></div>
          <div className="skeleton_card"></div>
          <div className="skeleton_card"></div>
          <div className="skeleton_card"></div>
          <div className="skeleton_card"></div>
          <div className="skeleton_card"></div>
        </div>
      )}
      {mode === "list" && (
        <div clasName="skeleton_list_container">
          <div className="skeleton_list"></div>
        </div>
      )}
      {mode === "image" && (
        <div className="skeleton_image_container">
          <div className="skeleton_image"></div>
        </div>
      )}
      {mode === "form" && (
        <div clasName="skeleton_form_container">
          <div className="skeleton_form"></div>
        </div>
      )}
    </div>
  );
};

export default Skeleton;
