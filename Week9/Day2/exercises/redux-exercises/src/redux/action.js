export const changePropertyOne = (value) => {
    return {
        type: 'PROP_ONE',
        payload: value
    }
}

export const changePropertyTwo = () => {
    return {
        type: 'PROP_TWO',
    }
}