import React, { useReducer } from 'react';
import createDataContext from './createDataContext';
import gitNames from '../assets/names/gitNames';


const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost':{
            const id_num = Math.floor(Math.random() * 999999);
            const randName =  Math.floor(Math.random() * 4950);
            return [...state, { id: id_num, title: `${gitNames[randName]}` }];
        }
            
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost }, 
    []
);