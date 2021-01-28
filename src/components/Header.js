import React, { useEffect, useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import { green, red } from '@material-ui/core/colors';
import { SignalWifi1BarLock } from '@material-ui/icons';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from '../context';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '1rem',
  },
  colorText: {
    color: '#EA2027',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '3.5rem',
  },
  goDown: {
    color: '#EA2027',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  const {openSidebar, openModal} = useGlobalContext();
  
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Shopping</span>
          </h1>
          <Button onClick={openModal} className='btn' color="inherit" style={{background: "#EA2027"}}>Login</Button>
            <IconButton color="primary" aria-label="add to shopping cart" className={classes.icon}>
              <AddShoppingCartIcon />
            </IconButton>
          <IconButton>
            <button onClick={openSidebar} className={classes.icon} style={{background: "none", border: "none", fontSize: "1.7rem", cursor: "pointer" }}>
              <FaBars />
            </button>
          </IconButton>
        </Toolbar>
      </AppBar>
      

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            My<span className={classes.colorText}>Shopping</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}