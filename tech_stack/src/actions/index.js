export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};

//action creators are functions that return an action
//an object w/ a type property is also known as an 'action'
//the selectLibrary function is an action creator
