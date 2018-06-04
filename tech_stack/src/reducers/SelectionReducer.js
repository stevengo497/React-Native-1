export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state; //if action is not called, then return last state
    }
};

//if state is undefined, then default to null
