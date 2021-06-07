let initState = {
    property_one: 'text one',
    property_two: 'text two',
}

export const reducer = (state = initState, action={}) => {
    switch(action.type) {
        case 'PROP_ONE':
            return {...state, property_one: action.payload}
            break;
        case 'PROP_TWO':
            return {...state, property_two: state.property_one}
            break;
        default:
            return {...state}
    }
}