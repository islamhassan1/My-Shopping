import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import Sidbar from './components/Sidebar';
import Modal from './components/Modal';
import Categories from './components/Categories';
import Menu from './components/Menu';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const useStyles = makeStyles((theme) => ({
  root: {
    height: '1500PX',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App() {
  const classes = useStyles();
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidbar />
      <Header />
      <Modal />
      <PlaceToVisit />
       <main>
      <section className="menu section">
        <div className="title">
          <h2>Categories</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
      
    </div>
  );
}