import React, { useReducer } from 'react';
import ItemContext from './itemContext';
import itemReducer from './itemReducer';
import {
  ADD_ITEM,
  DELETE_ITEM,
  CLEAR_FILTER,
  FILTER_ITEM,
} from '../types';

const ItemState = (props) => {
  const initialState = {
    items: [
      {
        id: 2,
        name: 'ITEM',
        column: '1',
      },
      {
        id: 3,
        name: 'ITEM',
        column: '1',
      },
      {
        id: 4,
        name: 'ITEM',
        column: '2',
      },
      {
        id: 5,
        name: 'ITEM',
        column: '2',
      },
      {
        id: 6,
        name: 'ITEM',
        column: '1',
      },
      {
        id: 7,
        name: 'ITEM',
        column: '1',
      },
      {
        id: 8,
        name: 'ITEM',
        column: '1',
      },
      {
        id: 9,
        name: 'ITEM',
        column: '2',
      },
      {
        id: 10,
        name: 'ITEM',
        column: '2',
      },
    ],
    filtered: null,
  };
  const [state, dispatch] = useReducer(itemReducer, initialState);

  // ADD Item
  const addItem = (item) => {
    try {
      item.id = Math.floor(Math.random() * 3000);
      dispatch({ type: ADD_ITEM, payload: item });
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE Item
  const deleteItem = (id) => {
    dispatch({ type: DELETE_ITEM, payload: id });
  };

  //FILTER ITEM
  const filterItems = (text) => {
    dispatch({ type: FILTER_ITEM, payload: text });
  };

  // CLEAR ITEM
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        filtered: state.filtered,
        addItem,
        deleteItem,
        filterItems,
        clearFilter,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;
