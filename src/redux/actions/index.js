export function GetAllCharacter(){
    return function(dispatch){
        return fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => dispatch({
            type: "GET_ALL_CHARACTERS",
            payload: data.results
        }))
        .catch(e => console.log(e))
    }
}
let id = 20
export function createCharacter(object) {
    return function (dispatch){
        return dispatch({
            type: "CREATE_CHARACTER",
            payload: {id: id,...object}
        })
    }
}

export function deleteCharacter(id){
    return function(dispatch) {
        return dispatch({
            type: "DELETE_CHARACTER",
            payload: id
        })
    }
}