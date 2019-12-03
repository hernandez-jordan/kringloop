import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
}));


const MobileMenu = ({styles}) => {
    console.log('styles:', styles);
    // const parentClasses = props.classes;
    const classes =  useStyles();

    const menuHandler = () =>{
      console.log('menu button clicked');
  }
    return(
        <div
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={menuHandler}
                >
                <MenuIcon />
            
        </div>
    );
}
export default MobileMenu;