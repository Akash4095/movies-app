import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovieOrShowDetails, getSelectedMovieOrShows, removeSelectedMOvieOrShow } from '../../redux/moviesReducer/movieSlice';
import { Icon } from 'semantic-ui-react';
import "./movieDetails.scss"

const MovieDetails = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();

    const data = useSelector(getSelectedMovieOrShows)

    console.log('single-move-data', data)

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetails(imdbID))
        return () => {
            dispatch(removeSelectedMOvieOrShow())
        }
    }, [dispatch, imdbID])

    return (
        <div className='movie-section'>
            {
                Object.keys(data).length !== 0 ?
                    <>
                        <div className='section-left'>
                            <div className='movie-title'>
                                {data.Title}
                            </div>
                            <div className='movie-rating'>
                                <span>
                                    IMDB Rating <Icon name='star' color="orange">{data.imdbRating}</Icon>
                                </span>
                                <span>
                                    IMDB Votes <Icon name='thumbs up' color="green">{data.imdbVotes}</Icon>
                                </span>
                                <span>
                                    Runtime <Icon name='film' color="grey">{data.Runtime}</Icon>
                                </span>
                                <span>
                                    Year <Icon name='calendar' color="grey">{data.Year}</Icon>
                                </span>
                            </div>
                            <div className='movie-plot'>
                                {data.Plot}
                            </div>
                            <div className='movie-info'>
                                <div>
                                    <span>Director</span>
                                    <span>{data.Director}</span>
                                </div>
                                <div>
                                    <span>Stars</span>
                                    <span>{data.Actors}</span>
                                </div>
                                <div>
                                    <span>Geners</span>
                                    <span>{data.Gener}</span>
                                </div>
                                <div>
                                    <span>Languages</span>
                                    <span>{data.Language}</span>
                                </div>
                                <div>
                                    <span>Awards</span>
                                    <span>{data.Awards}</span>
                                </div>
                            </div>
                        </div>
                        <div className='section-right'>
                            <img src={data.Poster} alt={data.Title}></img>
                        </div>
                    </>
                    :
                    <div>Loading...</div>
            }
        </div>
    )
}

export default MovieDetails