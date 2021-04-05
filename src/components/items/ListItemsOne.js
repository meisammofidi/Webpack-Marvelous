import React, { Fragment, useContext, useState, useEffect } from 'react';
import Item from './Item';
import ItemContext from '../../context/item/itemContext';

const ListItemsOne = () => {
  const itemContext = useContext(ItemContext);
  const { items, filtered } = itemContext;
  const [items1, setItems1] = useState([]);
  const [filterItems1, setFilterItems1] = useState([]);
  useEffect(() => {
    if (filtered === null) {
      const allItems = items.filter((item) => item.column === '1');
      setItems1(allItems);
    } else {
      const filteredItems = filtered.filter((item) => item.column === '1');
      setFilterItems1(filteredItems);
    }
  }, [items, filtered]);

  if (items1.length === 0) return <h4>Please add an item</h4>;

  return (
    <Fragment>
      <div id='column-header'>
        <h3 className='p-1'>COLUMN 1</h3>
      </div>

      {filtered !== null
        ? filterItems1.map((item, index) => (
            <Item
              key={item.id}
              item={item}
              bgColor={index % 2 === 0 ? 'bg-secondary' : 'bg-primary'}
            />
          ))
        : items1.map((item, index) => (
            <Item
              key={item.id}
              item={item}
              bgColor={index % 2 === 0 ? 'bg-secondary' : 'bg-primary'}
            />
          ))}
    </Fragment>
  );
};

export default ListItemsOne;
