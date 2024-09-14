import * as api from './api'; // Import API functions

// Action Creator
export const getGrid = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(); // Fetch the posts from the API

        dispatch({ type: 'FETCH_ALL', payload: data }); // Dispatch action with fetched data
    } catch (error) {
        console.error(error);
    }
};

export const createGrid = (grid) => async (dispatch) => { // now need to dispatch the action
    try {
        const {data} = await api.createGrids(grid);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
};
