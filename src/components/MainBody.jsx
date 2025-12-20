import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { MainContainer } from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import { addTopRatedMovies } from '../utils/movieSlice';
import useTopRatedMovies from '../hooks/useTopRatedMovies ';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const MainBody = () => {
useNowPlayingMovies();
usePopularMovies()
useTopRatedMovies()
useUpcomingMovies()

  
  return (
    <div>
      <Header/>
      <MainContainer />
      <SecondaryContainer/>
    </div>
  )
}

export default MainBody