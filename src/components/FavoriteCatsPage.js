
import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import { selectors as likeSelectors, likes } from '../store/likes';

export const FavoriteCatsPage = function FavoriteCatsPage() {
  const dispatch = useDispatch();
  const likeIds = useSelector(likeSelectors.likeIds);

  const onDislike = React.useCallback((catId) => {
    dispatch(likes.actions.toggle(catId));
  }, []);

  return (
    <div>
      {likeIds.map(id => {
        return (
          <div key={id} onClick={() => onDislike(id)}>
            Liked cat id: {id}
          </div>
        );
      })}
    </div>
  )
}
