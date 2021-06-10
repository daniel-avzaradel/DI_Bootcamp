let initState = {
    movies: []  
}

export const reducer = (state = initState, action={}) => {
    switch(action.type) {
        case 'MOVIE_SELECTED':
            return {...state, chose: action.payload}
            break;
        default:
            return {...state} 
    }
}