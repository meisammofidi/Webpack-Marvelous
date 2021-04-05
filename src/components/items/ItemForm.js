import React, { useContext, useState } from 'react';
import ItemContext from '../../context/item/itemContext';
import ItemFilter from './ItemFilter';

const ItemForm = () => {
  const itemContext = useContext(ItemContext);
  const [item, setItem] = useState({
    id: null,
    name: '',
    column: '',
  });

  const { name, column } = item;

  const onChange = (e) =>
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    itemContext.addItem(item);
    setItem({
      id: null,
      name: '',
      column: '',
    });
  };

  return (
    <form className='px-1' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='ENTER ITEM'
        name='name'
        value={name}
        onChange={onChange}
      />
      <select name='column' value={column} onChange={onChange}>
        <option value='' disabled>
          CHOOSE COLUMN{' '}
        </option>
        <option value='1'>Column 1</option>
        <option value='2'>Column 2</option>
      </select>
      <div className='my-4'>
        <input type='submit' value='ADD ITEM' className='btn btn-block' />
      </div>

      <ItemFilter />
    </form>
  );
};

export default ItemForm;
