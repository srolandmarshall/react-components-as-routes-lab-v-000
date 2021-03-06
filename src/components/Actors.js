import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor,index)=>
        <div key={actor.name}>
        <h2>{actor.name}</h2>
        <h3>Movies:</h3>
        <ul id="movies">
          {actor.movies.map((movie)=>
            <li key={movie}>{movie}</li>
          )}
        </ul>
        </div>
      )}
    </div>
  );
};

export default Actors;
