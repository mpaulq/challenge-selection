import fetch from 'cross-fetch';

export const SEND_QUERY = 'SEND_QUERY';
export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const FILTER_POSTS = 'FILTER_POSTS';

export const sendQuery = () => {
    return {
        type: SEND_QUERY
    }
}

export const getPosts = posts => {
    return {
        type: GET_POSTS,
        payload: posts
    }
}

export const addPost = post => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const deletePost = postId => {
    return {
        type: DELETE_POST,
        payload: postId
    }
}

export const filterPosts = field => {
    return {
        type: FILTER_POSTS,
        payload: field
    }
} 

export const fetchPosts = () => dispatch => {
    const url = 'http://localhost:8000/api/posts';
    dispatch(sendQuery())
    fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch(getPosts(res.data))
        })
}

export const createPost = (data) => dispatch => {
    const url = 'http://localhost:8000/api/posts';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    fetch(url, requestOptions)
        .then(res => res.json())
        .then(res => {
            dispatch(addPost(res))
        })
}

export const delPost = (id) => dispatch => {
    const url = `http://localhost:8000/api/posts/${id}`;
    fetch(url, {method: 'DELETE'})
        .then(res => res.json())
        .then(res => {
            dispatch(deletePost(res.deleted))
        })
}

