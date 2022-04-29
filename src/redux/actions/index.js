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