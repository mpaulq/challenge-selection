import { SEND_QUERY, GET_POSTS, ADD_POST, DELETE_POST, FILTER_POSTS } from '../actions';

let defaultState = {
    loading: false,
    posts: [],
    filterField: ''
};

const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEND_QUERY:
            return {
                ...state,
                loading: true
            }
        case GET_POSTS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== Number(action.payload))
            }
        case FILTER_POSTS:
            return {
                ...state,
                filterField: action.payload
            }
        default:
            return state;
    }
}

export default postReducer;