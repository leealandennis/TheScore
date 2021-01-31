/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */


import {SportsFootball} from "@material-ui/icons";

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import {
    AppBar,
    Divider,
    Drawer,
    IconButton, ListItem, ListItemIcon, ListItemText,
    // ListItem,
    // ListItemIcon,
    // ListItemText,
    Toolbar,
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";
import List from "reactstrap/es/List";
import {BrowserRouter, Route} from "react-router-dom";
import Title from './Components/Title'
import PlayerStats from "./Components/PlayerStats";

function App () {

    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        setOpen(true);
        console.log(process.env)
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawer}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6">
                            The Score
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={open}
                    onClose={handleDrawerClose}
                >
                    <Divider />
                    <List>
                        <ListItem button onClick={() => window.location.href = '/players' }>
                            <ListItemText primary="Players Rushing Stats" />
                            <ListItemIcon><SportsFootball /></ListItemIcon>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Title}/>
                    <Route exact path="/players" component={PlayerStats} />
                </BrowserRouter>
            </div>
        </div>

    );
}

export default App;
