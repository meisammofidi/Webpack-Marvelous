import React, { Fragment, useContext } from 'react';
import Item from './Item';
import ItemContext from '../../context/item/itemContext';

const Items = () => {
  const itemContext = useContext(ItemContext);
  const { items } = itemContext;
  return (
    <Fragment>
      <Fragment>
        <h3 className='p-1'>COLUMN 1</h3>

        {items && items.length > 0 ? (
            items.filter(item => item.colums === '1')
          .map((item) => <Item key={item.id} item={item} />)
        ) : (
          <h3> No item exists</h3>
        )}
      </Fragment>
      <Fragment>
        <h3 className='p-1'>COLUMN 2</h3>

        {items && items.length > 0 ? (
          items.filter(item => item.colums === 2)
            .map((item) => <Item key={item.id} item={item} />)
        ) : (
          <h3> No item exists</h3>
        )}
      </Fragment>
    </Fragment>
  );
};

export default Items;
