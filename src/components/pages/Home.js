import React, { Fragment } from 'react';
import ListItemsOne from '../items/ListItemsOne';
import ListItemsTwo from '../items/ListItemsTwo';
import ItemForm from '../items/ItemForm';
import Header from './Header';

const Home = () => {
  return (
    <Fragment>
      <div>
        <Header />
      </div>
      <div className='grid-3'>
        <div>
          <ItemForm />
        </div>
        <div className='br-primary'>
          <ListItemsOne />
        </div>
        <div className='br-primary'>
          <ListItemsTwo />
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
