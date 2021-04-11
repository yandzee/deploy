import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

import { CatImage } from './CatImage';

import { selectors as catSelectors, cats } from '../store/cats';
import { selectors as likeSelectors, likes } from '../store/likes';

export const AllCatsPage = function AllCatsPage() {
  const dispatch = useDispatch();
  const images = useSelector(catSelectors.images);
  const likeIds = useSelector(likeSelectors.likeIds);

  React.useEffect(() => {
    if (images.length !== 0) return;

    const URL = "https://api.thecatapi.com/v1/images/search?limit=9"
    axios.defaults.headers.common['x-api-key'] = "53eeb490-fd74-453a-a80a-826d1cb66fae"

    axios.get(URL).then(res => {
      console.log(res.data);
      dispatch(cats.actions.setImages({ images: res.data }));
    })
  }, []);

  const onCatClick = React.useCallback((catId) => {
    dispatch(likes.actions.toggle(catId));
  }, []);

  return (
    <div>
      {images.map(imgDatum => {
        return (
          <CatImage
            key={imgDatum.id}
            url={imgDatum.url}
            isLiked={likeIds.includes(imgDatum.id)}
            onToggle={() => onCatClick(imgDatum.id)}
          />
        );
      })}

      <br />

      {likeIds.map(id => {
        return (
          <div key={id} onClick={() => onCatClick(id)}>
            Liked cat id: {id}
          </div>
        );
      })}
    </div>
  )
}
