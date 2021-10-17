import React, { useEffect, useState } from 'react';
import Section from './Section';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from './../util/router.js';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useDarkMode } from './../util/theme.js';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../action/logout';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 45,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const selector = useSelector((state) => state.signinReducer?.authData);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(localStorage.getItem('profile'));
  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuState, setMenuState] = useState(null);
  const history = useHistory();

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };
  const user = localStorage.getItem('profile');

  useEffect(() => {
    const user = localStorage.getItem('profile');
    setAuth(user);
  }, [selector, user]);
  return (
    <Section bgColor={props.color} size='auto'>
      <AppBar position='static' color='transparent' elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link to='/'>
              <img src={logo} alt='Logo' className={classes.logo} />
            </Link>
            <div className={classes.spacer} />
            <Hidden smUp={true} implementation='css'>
              <IconButton
                onClick={() => {
                  setDrawerOpen(true);
                }}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden xsDown={true} implementation='css'>
              {auth ? (
                <>
                  <Button
                    color='inherit'
                    aria-label='Account'
                    aria-controls='account-menu'
                    aria-haspopup='true'
                    onClick={(event) => {
                      handleOpenMenu(event, 'account-menu');
                    }}
                  >
                    Account
                    <ExpandMoreIcon className={classes.buttonIcon} />
                  </Button>
                  <Menu
                    id='account-menu'
                    open={
                      menuState && menuState.id === 'account-menu'
                        ? true
                        : false
                    }
                    anchorEl={menuState && menuState.anchor}
                    getContentAnchorEl={undefined}
                    onClick={handleCloseMenu}
                    onClose={handleCloseMenu}
                    keepMounted={true}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <MenuItem component={Link} to='/dashboard'>
                      Dashboard
                    </MenuItem>

                    <MenuItem component={Link} to='/settings/general'>
                      Settings
                    </MenuItem>

                    <Divider />
                    <MenuItem onClick={() => dispatch(logout(history))}>
                      Signout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Button color='inherit' component={Link} to='/auth/signin'>
                  Sign in
                </Button>
              )}

              <IconButton
                color='inherit'
                onClick={darkMode.toggle}
                style={{ opacity: 0.6 }}
              >
                {darkMode.value && <NightsStayIcon />}

                {!darkMode.value && <WbSunnyIcon />}
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          className={classes.drawerList}
          onClick={() => setDrawerOpen(false)}
        >
          {!auth && (
            <ListItem button={true} component={Link} to='/auth/signin'>
              <ListItemText>Sign in</ListItemText>
            </ListItem>
          )}

          {auth && (
            <>
              <ListItem button={true} component={Link} to='/dashboard'>
                <ListItemText>Dashboard</ListItemText>
              </ListItem>

              <ListItem button={true} component={Link} to='/settings/general'>
                <ListItemText>Settings</ListItemText>
              </ListItem>

              <Divider />
              <ListItem button={true} onClick={() => dispatch(logout(history))}>
                <ListItemText>Sign out</ListItemText>
              </ListItem>
            </>
          )}

          <ListItem>
            <IconButton
              color='inherit'
              onClick={darkMode.toggle}
              style={{ opacity: 0.6 }}
            >
              {darkMode.value && <NightsStayIcon />}

              {!darkMode.value && <WbSunnyIcon />}
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </Section>
  );
}

export default Navbar;
