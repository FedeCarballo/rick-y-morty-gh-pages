
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
        default: 
            return {
                ...state
            }
        }
    }

export default rootReducer;