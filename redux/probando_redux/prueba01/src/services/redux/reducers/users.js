import { ADD_USER, REMOVE_USER, UPDATE_USER } from "../actions/users"

const initialState = [
    {id: 1, name: 'Axel U', email: 'test1@test.com'},
    {id: 2, name: 'Rafa G', email: 'test2@test.com'},
    {id: 3, name: 'Manel B', email: 'test3@test.com'},
    {id: 4, name: 'Saya C', email: 'test4@test.com'},
]

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email
                }
            ]

        case UPDATE_USER:
            // const usersUpdated = state.map(user => {
            //     if(user.id === action.payload.id){
            //         user.name = action.payload.name;
            //         user.email = action.payload.email;
            //     }
            //     return user;
            // })
            return state.map(user => {
                if(user.id === action.payload.id){
                    user.name = action.payload.name;
                    user.email = action.payload.email;
                }
                return user;
            })
    
        case REMOVE_USER:
            return state.filter(user => user.id !== action.payload)
        default:
            return state
    }
}

export default usersReducer