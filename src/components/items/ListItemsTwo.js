import React, { useContext, useState, useEffect, Fragment } from 'react';
import Item from './Item';
import ItemContext from '../../context/item/itemContext';

const ListItemsTwo = () => {
  const itemContext = useContext(ItemContext);
  const { items, filtered } = itemContext;
  const [items2, setItems2] = useState([]);
  const [filterItems2, setFilterItems2] = useState([]);
  useEffect(() => {
    if (filtered === null) {
      const filteredCol2 = items.filter((item) => item.column === '2');
      setItems2(filteredCol2);
    } else {
      const column2_filteredItems = filtered.filter(
        (item) => item.column === '2'
      );
      setFilterItems2(column2_filteredItems);
    }
  }, [items, filtered]);

  if (items2.length === 0) return <h4>Please add an item</h4>;

  return (
    <Fragment>
      <div id='column-header'>
        <h3 className='p-1'>COLUMN 2</h3>
      </div>

      {filtered !== null
        ? filterItems2.map((item, index) => (
            <Item
              key={item.id}
              item={item}
              bgColor={index % 2 === 0 ? 'bg-secondary' : 'bg-primary'}
            />
          ))
        : items2.map((item, index) => (
            <Item
              key={item.id}
              item={item}
              bgColor={index % 2 === 0 ? 'bg-secondary' : 'bg-primary'}
            />
          ))}
    </Fragment>
  );
};

export default ListItemsTwo;
