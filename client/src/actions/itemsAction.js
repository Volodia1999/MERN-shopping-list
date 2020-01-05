import {GET_ITEMS, DELETE_ITEM, ADD_ITEM} from "./actionTypes";
import axios from 'axios';

const getItemsSuccess = (items) => (
    {
        type: GET_ITEMS,
        payload: items
    }
);

const deleteItemSuccess = (id) => (
    {
        type: DELETE_ITEM,
        payload: id
    }
);

export const addItemSuccess = (newItem) => (
    {
        type: ADD_ITEM,
        payload: newItem
    }
);

export const getAllItems = () => async (dispatch) => {
    const response = await axios.get('/api/items');
    dispatch(getItemsSuccess(response.data))
};

export const deleteItem = (id) => async (dispatch) => {
    await axios.delete(`/api/items/${id}`);
    dispatch(deleteItemSuccess(id));
};

export const addItem = (newItem) => async (dispatch) => {
    const response = await axios.post('/api/items', newItem);
    dispatch(addItemSuccess(response.data));
};
