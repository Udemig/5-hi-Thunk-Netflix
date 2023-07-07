import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ListMovies = ({ genre }) => {
  console.log(genre);
  return (
    <div>
      <h1>{genre.name}</h1>
      <Splide>
        <SplideSlide>Film1</SplideSlide>
        <SplideSlide>Film2</SplideSlide>
        <SplideSlide>Film3</SplideSlide>
        <SplideSlide>Film4</SplideSlide>
      </Splide>
    </div>
  );
};

export default ListMovies;
