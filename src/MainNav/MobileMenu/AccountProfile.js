import React, { useState } from 'react';
import { makeStyles, Grid, Button, ButtonGroup, Popper, TextField, Link, ClickAwayListener} from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';


const useStyles = makeStyles(theme => ({
    paragraphStyles : {
        margin: '0 auto !important',
        fontSize: '0.7em', 
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
    typography : {
        padding: theme.spacing(2),
    },
    paper: {
        border: '1px solid',
        padding: theme.spacing(1),
      },
    popperMenu : {
        '&:not(:first-child)' :{
            zIndex:1200,
            backgroundColor : 'white',
            boxShadow: '0px 2px 6px #ababab',
            textAlign: 'center',
            fontFamily: 'Oswald',
            fontWeight: '300',
            color: 'black',
            '& .MuiInputLabel-outlined': {
                color : 'black'
            },
            '& .MuiTypography-colorPrimary' : {
                color : 'black',
                fontSize:'0.7em',
            },
        },
    },
    textField : {
        '& .MuiOutlinedInput-notchedOutline':{
            borderColor:'black!important',
            borderRadius: '0px',
            margin: theme.spacing(1),
        },
    },
    button:{
        width: '-webkit-fill-available',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 0,
        margin: theme.spacing(1),
        '&:hover' :{
            backgroundColor: '#e6e6e6',
            color: 'black'
        }

    }
}));

const AccountProfile = () => {
    const classes =  useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const preventDefault = event => event.preventDefault();
    
    const users = 'users';
    const popperOpen = Boolean(anchorEl);
    const id = popperOpen ? 'simple-popper' : undefined;
   
    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        // setOpen(!open);
      };

    const handleClickAway = event => {
        // setOpen(false);
        //setAnchorEl(null);
        //console.log(event.target)
    };

    return(
        <ClickAwayListener onClickAway={handleClickAway}>
            <div>
                <Grid container spacing={3}>
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
                                    aria-describedby={id} 
                                    type="button" 
                                    onClick={handleClick}
                                    startIcon={<AccountBoxIcon />} 
                                    classes={{root : classes.groupedText}}
                                    id={users}
                                    >User
                                </Button>
                                <Button 
                                    startIcon={<LanguageIcon />} 
                                    classes={{root : classes.groupedText}}
                                    >ENG
                                </Button>
                        </ButtonGroup>
                    
                                {Boolean(anchorEl) ? (
                                <Popper className={classes.popperMenu} 
                                    id={id} open={Boolean(anchorEl)} 
                                    anchorEl={anchorEl}>
                                        <h3 >Sign in</h3>
                                        <form className={classes.form} noValidate autoComplete="off">
                                                <TextField className={classes.textField} label="Username" variant="outlined" /> <br/>
                                                <TextField className={classes.textField} label="Password" variant="outlined" type="password" />
                                                <br/>
                                                <Button className={classes.button} variant="contained">Sign In</Button> <br/>
                                                <Link href="#" onClick={preventDefault}>
                                                    <b>Forgot</b> Password or Username?
                                                </Link>
                                                <br/>
                                                <br/>
                                                <p className={classes.paragraphStyles}>or <b>sign in</b> with</p>
                                                <Button
                                                    variant="contained"
                                                    className={classes.button}
                                                    startIcon={<FacebookIcon />}
                                                >
                                                    Facebook
                                                </Button>
                                        </form>
                                </Popper>
                                ) : null}
                    </Grid>
                </Grid>
            </div>
        </ClickAwayListener>
    );
}
export default AccountProfile;