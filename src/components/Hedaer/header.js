import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import user from "../../images/user.png"
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/moviesReducer/movieSlice'
import "./header.scss"

const Header = () => {
  const [searchValue, setSearchValue] = useState("")
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(searchValue))
    dispatch(fetchAsyncShows(searchValue))
  
  }
  return (
    <div className='header'>

      <div className='logo'>
        <Link to='/' >Movie App</Link>
      </div>

      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type='text' value={searchValue} placeholder="Search Movies or Shows" onChange={(e) => setSearchValue(e.target.value)}></input>
          <button type='submit' className='fa fa-search' ></button>
        </form>
      </div>
      <div className='user-image'>
        <img src={user} alt='user'></img>
      </div>
    </div>
  )
}

export default Header