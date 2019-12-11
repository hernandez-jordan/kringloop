import React from 'react';
import { AppBar, Toolbar,Typography, Container, makeStyles, Link, Grid, ButtonGroup, Button, IconButton} from '@material-ui/core';
import { usePopupState, bindTrigger } from 'material-ui-popup-state/hooks';
import AccountProfile from '../MainNav/MobileMenu/AccountProfile';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LanguageIcon from '@material-ui/icons/Language';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  paperRoot: {
    '& .MuiPaper-root': {
      top: '60px'
    },
  },
  iconButton :{
    borderRadius : 0
  },
  logo: {
    color: 'white',
    '&:hover' : {
      textDecoration: 'none',
    },
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
  gridContainer:{
      width: 'auto',
      margin : 0,
  },
  groupedText: {
    '&:not(:last-child)': {
        borderRight: '1px solid #f5f5f573',
        },
    '&:hover' : {
        backgroundColor: '#f5f5f530',
        borderRadius: '0px',
    },
    color : 'white',
  },
  title : {
    fontFamily: 'Oswald',
  },
  sectionDesktop: {
    width: 'auto',
    margin : 0,
    [theme.breakpoints.down('xs')]: {
      display: 'none', 
    },
  },
  sectionMobile: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },

}));

const MainNavBar = () => {
  const classes = useStyles();

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'userPopover',
  })

  const mobileMenuId = 'primary-account-menu-mobile';

  return ( 
    <div>
        <AppBar position="static" className={classes.appBarColor}>
            <Container>
              <Toolbar className={classes.grow}>
                <Typography className={classes.title} 
                variant="h6" 
                noWrap
                >
                  <Link href="#"
                    className={classes.logo}
                  >
                    KRINGLOOP
                  </Link>
                </Typography>
                
                <AccountProfile popupState={popupState}/>
                <Grid container spacing={3}
                  className={classes.sectionDesktop}
                >
                  <Grid item>
                    <ButtonGroup 
                      variant="text" 
                      aria-label="full-width contained button group"
                      >
                        <Button 
                            startIcon={<ShoppingCartIcon />} 
                            classes={{root : classes.groupedText}} 
                            >Cart
                        </Button>
                        <Button
                            type="button" 
                            startIcon={<AccountBoxIcon />} 
                            classes={{root : classes.groupedText}}
                            {...bindTrigger(popupState)}
                            >User
                        </Button>
                        <Button 
                            startIcon={<LanguageIcon />} 
                            classes={{root : classes.groupedText}}
                            >ENG
                        </Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </Container>
        </AppBar>
    </div>
  );
}

export default MainNavBar;