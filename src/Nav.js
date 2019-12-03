import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Tabs, Tab, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'orange'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.down('xs')]: {
        display: 'flex'
    },
  },
  title: {
    flexGrow: 1,
  },
  
}));

const TabPanel = ({children, value, index}) => (
    <Typography
      component="div"
      role="tabpanel"
      hidden={ value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <Box p={4}>{children}</Box>
    </Typography>
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [toggleValue, setToggleValue] = useState(true);
  const handleToggle = () => {
    setToggleValue(!toggleValue);
  }
  const a11yProps = index => ({
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    });
  
  const handleChange = (event, newValue) => setValue(newValue);
  
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{display: (toggleValue) ? 'flex' : 'none'}}>
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <Tabs 
        aria-label="simple tabs example" onChange={handleChange} value={value}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0}> This is box one</TabPanel>
        <TabPanel value={value} index={1}> This is box two</TabPanel>
        <TabPanel value={value} index={2}> This is box three</TabPanel>
        <TabPanel value={value} index={3}> This is box four</TabPanel>
        <Button variant="contained" color="primary" onMouseEnter={handleToggle}>Primary</Button>
    </div>
  );
}