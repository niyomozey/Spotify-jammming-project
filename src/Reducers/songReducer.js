const initialState = []
 
function songReducer(state = initialState, action){
    console.log('state :',state)
    switch(action.type){
        case "GET_SONG":
            return action.payload
        case "PUBLIC_PLAYLIST":
            return action.payload.filter((track)=> track.public === true)
        case "SEARCH_SONG":
            return state.filter((song) => song.name.includes(action.name))
        default:
            return state;
    }
};

export default songReducer;