import React from 'react';
import { AppBar, Toolbar,Typography, Container, makeStyles, Link} from '@material-ui/core';
import AccountProfile from '../MainNav/MobileMenu/AccountProfile';




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
                  
                  <AccountProfile />
                  
                </Toolbar>
            </Container>
        </AppBar>
    </div>
  );
}

export default MainNavBar;