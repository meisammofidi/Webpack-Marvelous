import React, { useContext, useRef, useEffect, Fragment } from 'react';
import ItemContext from '../../context/item/itemContext';

const ItemFilter = () => {
  const itemContext = useContext(ItemContext);
  const text = useRef('');
  const { filterItems, clearFilter, filtered } = itemContext;

  useEffect(() => {
    if (filtered === null) text.current.value = '';
  });

  const onChange = (e) => {
    if (text.current.value !== '') filterItems(e.target.value);
    else clearFilter();
  };

  return (
      <div>
        <small className='font-sm'>
          <b>SEARCH AN ITEM</b>
        </small>
        <input
          ref={text}
          type='text'
          placeholder='SEARCH'
          onChange={onChange}
        />
      </div>
  );
};

export default ItemFilter;
