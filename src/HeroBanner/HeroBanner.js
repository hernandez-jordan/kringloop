import React, { useState, useEffect } from 'react';
import { Container, makeStyles, InputBase}  from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import BannerDesktop from '../Images/BannerDesktop.jpg';
import BannerMobile from '../Images/BannerMobile.jpg';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
      },
    inputRoot: {
        color: 'inherit',
    },
    media : {
        height: '600px',
        boxShadow: 'inset 0 0 0 100vw rgba(0,0,0,0.2)',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.down('sm')]: {
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
        [theme.breakpoints.down('sm')]: {
            paddingTop: '2em',
          },
    },
    
    bannerTitle:{
        color: 'black',
        fontFamily: 'Oswald',
        fontSize: 'calc(30px + 0.5vw)',
        [theme.breakpoints.up('sm')]: {
            color: 'white'
          },
          marginBottom: '0.4em',
    },
    bannerSubTitle:{
        fontFamily: 'Helvetica',
        marginTop: 0,
        color:'black',
        [theme.breakpoints.up('sm')]: {
            color:'white',
          },
    },
    search: {
        position: 'relative',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
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
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        color: 'white',
        height:'2em',
        borderRadius: '0px',
        [theme.breakpoints.up('sm')]: {
            width: 350,
            '&:focus': {
            width: 400,
            border: '1px solid #fff',
          },
        },
    },
}));

const HeroBanner = () => {
    const classes = useStyles();
    const imageUrl = window.innerWidth >= 650 ? BannerDesktop : BannerMobile;
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    return (
        <div className={classes.media} style={{backgroundImage: `url(${imageUrl})` }}>
            <Container className={classes.wrapper}>
                <h2 className={classes.bannerTitle}>An endless supply of Second Chances</h2>
                <p className={classes.bannerSubTitle}>Find stores in your Area</p>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
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