import React, { useState } from 'react';
import { makeStyles, Grid, Button, ButtonGroup, TextField, Link, Popover} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import {
    bindPopover,
  } from 'material-ui-popup-state/hooks'

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
            // zIndex:1200,
            // backgroundColor : 'white',
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

const AccountProfile = props => {
    const classes =  useStyles();
    const {popupState } = props;
    const preventDefault = event => event.preventDefault();
    
    return(
            <Popover className={classes.popperMenu}
            {...bindPopover(popupState)} 

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
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
            </Popover>
    );
}
export default AccountProfile;