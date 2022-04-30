
const initialState = {
    
    characters: [],
    detail: {}
}
const rootReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case "GET_ALL_CHARACTERS":
            return{
                ...state, 
                characters: payload
            }
        case "CREATE_CHARACTER":
            return{
                ...state,
                characters: state.characters.concat(payload)
            }
        case "DELETE_CHARACTER":
            return{
                ...state,
                chacacters: state.characters.filter(c => c.id !== payload)
            }
        default: 
            return {
                ...state
            }
        }
    }

export default rootReducer;