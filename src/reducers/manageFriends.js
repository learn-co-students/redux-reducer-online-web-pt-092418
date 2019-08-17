// let state = {count: 0}

export function manageFriends(state, action){
    

    switch(action.type){

        case 'ADD_FRIEND':
            //  state.friends.push(action.friend)
            //  let newArray = state.friends
            // return {friends: newArray}


            return Object.assign({}, state, {
                friends: [...state.friends, action.friend]
            });
        case 'REMOVE_FRIEND':
            return Object.assign({}, state, {
                friends: state.friends.filter(friend => friend.id !== action.id)
            });
        default:
            return state;
    }
}

