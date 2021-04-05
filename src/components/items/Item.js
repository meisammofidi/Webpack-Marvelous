import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ItemContext from '../../context/item/itemContext';

const Item = ({ item, bgColor }) => {
  const itemContext = useContext(ItemContext);
  const { deleteItem } = itemContext;
  const { id, name } = item;

  const onDelete = () => {
    deleteItem(id);
  };

  return (
    <div className={bgColor}>
      <h3 className='p-1'>
        {name}{' '}
        <div className='btn-sm btn-round right' onClick={onDelete}>
          X
        </div>
      </h3>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Item;
