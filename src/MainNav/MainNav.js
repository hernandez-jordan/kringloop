import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge, MenuItem, Menu, Container, makeStyles, Link} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LanguageIcon from '@material-ui/icons/Language';
// import MobileMenu from './MobileMenu/MobileMenu';



const useStyles = makeStyles(theme => ({
  paperRoot: {
    '& .MuiPaper-root': {
      top: '60px'
    },
  },
  iconButton :{
    borderRadius : 0
  },
  link: {
    color: 'white',
    '&:hover' : {
      textDecoration: 'none',
    }
  },
  grow: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  appBarColor: {
    backgroundColor : 'orange'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'block',
    fontFamily : 'Oswald',
    underline : 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


const MainNavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      className={classes.paperRoot}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
     >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
            <LanguageIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return ( 
    <div className={classes.grow}>
        <AppBar position="static" className={classes.appBarColor}>
            <Container>
                <Toolbar className={classes.grow}>
                  
                  <Typography className={classes.title} 
                  variant="h6" 
                  noWrap
                  >
                    <Link href="#"
                      className={classes.link}
                    >
                      KRINGLOOP
                    </Link>
                  </Typography>
                  
                  <div className={classes.sectionDesktop}>
                      <IconButton aria-label="show 4 new mails" 
                      color="inherit"
                      size="medium"
                      classes={{root: classes.iconButton}}
                      >
                      <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                      </Badge>
                      </IconButton>
                      <IconButton color="inherit">
                      <Badge color="secondary">
                        <LanguageIcon />
                      </Badge>
                      </IconButton>
                      <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                      >
                      <AccountCircle />
                      </IconButton>
                  </div>
                  <div className={classes.sectionMobile}>
                      <IconButton
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                      >
                      <MoreIcon />
                      </IconButton>
                      {renderMobileMenu}
                      {renderMenu}
                  </div>
                </Toolbar>
            </Container>
        </AppBar>
    </div>
  );
}

export default MainNavBar;