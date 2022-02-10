import React from "react";

const Skeleton = ({ mode, quantity }) => {
  const renderGroupCards = () => {
    let cards = []
    for(let i = 0; i < +quantity; i++){
      cards.push(<div className="skeleton_card"></div>)
    }
    return cards
  }
  return (
    <div>
      {mode === "singleCard" && (
        <div className="skeleton_card_container">
          <div className="skeleton_card"></div>
        </div>
      )}
      {mode === "groupCards" && (
        <div className="skeleton_card_container">
          {renderGroupCards()}
        </div>
      )}
      {mode === "list" && (
        <div className="skeleton_list_container">
          <div className="skeleton_list"></div>
        </div>
      )}
      {mode === "image" && (
        <div className="skeleton_image_container">
          <div className="skeleton_image"></div>
        </div>
      )}
      {mode === "form" && (
        <div className="skeleton_form_container">
          <div className="skeleton_form"></div>
        </div>
      )}
    </div>
  );
};

export default Skeleton;
