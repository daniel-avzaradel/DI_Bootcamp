import React from 'react';
import { connect } from 'react-redux';
import { initMovies } from '../redux/actions'
import { movieDetails } from '../redux/actions'

class MovieList extends React.Component {

    componentDidMount() {
        this.props.initMovies();
    }

    render() {
        const movies = this.props.movies
        console.log('movies: ', this.props.movies)
        return (
            <div>   
                <h1>Movie List</h1>
                {
                    movies.map((item, i) => {
                        return (
                        <div key={i}>
                            <h3>{item.title}</h3>
                            <button onClick={() => this.props.movieDetails(item)}>Detail</button>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        movies: state.initMovies.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initMovies: () => dispatch(initMovies()),
        movieDetails: (param) => dispatch(movieDetails(param))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);