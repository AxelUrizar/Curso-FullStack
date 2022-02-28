import { ADD_PET, REMOVE_PET, UPDATE_PET } from "../actions/pets";

const initialState = [
    {id: 1, name: 'Name 1', type: 'Cat', userId: 1},
    {id: 2, name: 'Name 2', type: 'Dog', userId: 2},
    {id: 3, name: 'Name 3', type: 'Bird', userId: 3},
    {id: 4, name: 'Name 4', type: 'Cat', userId: 4},
]

const petsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PET:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    type: action.payload.type,
                    userId: action.payload.userId
                }
            ]

        case UPDATE_PET:
            // const usersUpdated = state.map(user => {
            //     if(user.id === action.payload.id){
            //         user.name = action.payload.name;
            //         user.email = action.payload.email;
            //     }
            //     return user;
            // })
            return state.map(pet => {
                if(pet.id === action.payload.id){
                    pet.name = action.payload.name;
                    pet.type = action.payload.type;
                    pet.userId = action.payload.userId
                }
                return pet;
            })
    
        case REMOVE_PET:
            return state.filter(pet => pet.id !== action.payload)

        default:
            return state
    }
}

export default petsReducer