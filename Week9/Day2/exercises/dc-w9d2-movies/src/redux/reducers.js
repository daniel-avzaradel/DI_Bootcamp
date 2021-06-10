import {MOVIE_SELECTED, INIT_MOVIE} from './actions';
import {combineReducers} from 'redux'

let initMoviesState = {
    movies: []
}

let initMoviesDetails = {
    details: ''
}

const initMovies = (state = initMoviesState, action={}) => {
    switch(action.type) {
        case INIT_MOVIE:
            return {...state, movies: action.payload}
            break;
        default:
            return {...state} 
    }
}

const movieDetails = (state = initMoviesDetails, action = {}) => {
    switch(action.type) {
        case MOVIE_SELECTED:
            return {...state, details: action.payload}
            break;
        default:
            return {...state} 
    }

}

export const reducer = combineReducers({
    initMovies,
    movieDetails,
})