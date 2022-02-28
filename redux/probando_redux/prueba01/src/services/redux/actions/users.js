// ADD_USER
export const addUser = (dispatch) => (id, name, email) => {
    console.log('dispatch ADD_USER')

    return dispatch({
        type: ADD_USER,
        payload: {
            id: id,
            name: name,
            email: email
        }
    })
}
// UPDATE_USER
export const updateUser = (dispatch) => (name, email) => {
    console.log('dispatch UPDATE_USER')

    return dispatch({
        type: UPDATE_USER,
        payload: {
            name: name,
            email: email
        }
    })
}
// REMOVE_USER
export const removeUser = (dispatch) => (id, name, email) => {
    console.log('dispatch REMOVE_USER')

    return dispatch({
        type: REMOVE_USER,
        payload: {
            id: id,
            name: name,
            email: email
        }
    })
}

// PETS_FILTER_BY_USER


export const ADD_USER = 'ADD_USER'

export const UPDATE_USER = 'UPDATE_USER'

export const REMOVE_USER = 'REMOVE_USER'

