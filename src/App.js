import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/footer';
import Header from './components/Hedaer/header';
import Home from './components/Home/home';
import PageNotFound from './components/PageNotFound/pageNotFound';
import MovieDetails from './components/MovieDetails/movieDetails';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetails />} />
            <Route path='/pageNotFound' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
