import { ADD_VET, REMOVE_VET, UPDATE_VET } from "../actions/vets"

const initialState = [
    {id: 1, name: 'Vet 1', email: 'test1@test.com'},
    {id: 2, name: 'Vet 2', email: 'test2@test.com'},
    {id: 3, name: 'Vet 3', email: 'test3@test.com'},
    {id: 4, name: 'Vet 4', email: 'test4@test.com'},
]

const vetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VET:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email
                }
            ]

        case UPDATE_VET:
            // const usersUpdated = state.map(user => {
            //     if(user.id === action.payload.id){
            //         user.name = action.payload.name;
            //         user.email = action.payload.email;
            //     }
            //     return user;
            // })
            return state.map(vet => {
                if(vet.id === action.payload.id){
                    vet.name = action.payload.name;
                    vet.email = action.payload.email;
                }
                return vet;
            })
    
        case REMOVE_VET:
            return state.filter(vet => vet.id !== action.payload)
        default:
            return state
    }
}

export default vetsReducer