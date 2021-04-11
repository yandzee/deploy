import React from "react";

export const CatImage = function CatImage(props) {
  const { url, isLiked, onToggle } = props;

  return (
    <div onClick={onToggle}>
      <span>Cat url: {url} (liked: {isLiked.toString()})</span>
    </div>
  )
}
