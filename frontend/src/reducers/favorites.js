import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: []
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch_favorites':
            return {...state, favorites: action.payload};
        case 'add_favorite':
            return {...state, favorites: [...state.favorites, action.payload] }
    }
}