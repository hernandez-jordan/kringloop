import React from 'react';
import { Container, makeStyles, InputBase}  from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import BannerDesktop from '../Images/BannerDesktop.jpg';
import BannerMobile from '../Images/BannerMobile.jpg';
import SearchIcon from '@material-ui/icons/Search';
import useWindowWidth from '../utils/hooks/WindowWidth';

const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
      },
    inputRoot: {
        color: 'inherit',
    },
    heroImage : {
        height: '600px',
        boxShadow: 'inset 0 0 0 100vw rgba(0,0,0,0.2)',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.down('xs')]: {
            backgroundPosition: 'bottom',
            height: 400,
          },
    },
    wrapper : {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '40px',
        paddingTop: '7em',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '2em',
          },
    },
    
    bannerTitle:{
        color: 'white',
        fontFamily: 'Oswald',
        fontSize: 'calc(30px + 0.5vw)',
        [theme.breakpoints.down('xs')]: {
            color: 'black',
          },
          marginBottom: '0.4em',
    },
    bannerSubTitle:{
        fontFamily: 'Helvetica',
        marginTop: 0,
        color:'white',
        fontSize: 'calc(1em + 0.5vw)',
        [theme.breakpoints.down('xs')]: {
            color:'black',
          },
    },
    search: {
        position: 'relative',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: 'auto',
        [theme.breakpoints.down('xs')]: {
          marginLeft: theme.spacing(1),
          width: '80vw',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            color: 'black'
          },
    },
    inputInput: {
        textAlign : 'left',
        padding: theme.spacing(1, 1, 1, 2),
        transition: theme.transitions.create('width'),
        width: '100%',
        color: 'black',
        height:'2em',
        borderRadius: '0px',
        '&:focus': {
            color: 'black',
        },
        [theme.breakpoints.up('sm')]: {
            color: 'white',
            padding: theme.spacing(1, 1, 1, 7),
            width: 300,
            '&:focus': {
                width: 400,
                border: '1px solid #fff',
                color: 'white',
            },
        },
    },
}));

const HeroBanner = () => {
    const classes = useStyles();

    const imageUrl = useWindowWidth() >= 600 ? BannerDesktop : BannerMobile;

    return (
        <div className={classes.heroImage} style={{backgroundImage: `url(${imageUrl})` }}>
            <Container className={classes.wrapper}>
                <h2 className={classes.bannerTitle}>An endless supply of Second Chances</h2>
                <p className={classes.bannerSubTitle}>Find stores in your Area</p>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Address, i.e Amsterdamplein"
                        classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Container>
        </div>
    );
}


export default HeroBanner;