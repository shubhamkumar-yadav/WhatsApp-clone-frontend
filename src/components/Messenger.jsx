import React from 'react';
import { AppBar, makeStyles, Toolbar,Box } from '@material-ui/core';
import  Login  from './account/Login.jsx';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider.jsx';
import ChatBox  from './ChatBox.jsx';

const useStyle = makeStyles({
    loginHeader:{
        height:'200px',
        background:'#00bfa5',
        boxShadow:'none'
    },
    header:{
        height:'115px',
        background:'#128c7e',
        boxShadow:'none'
    },
    component:{
        background:'#DCDCDC',
        height:'100vh'
    }
});

const Messenger = () => {
    const classes = useStyle();
    const {account} =useContext(AccountContext);
    return (<Box className={classes.component}>
        <AppBar className={account ? classes.header :classes.loginHeader}>
            <Toolbar></Toolbar>
        </AppBar>
        {account ? <ChatBox />  :<Login />}
    </Box>);
}

export { Messenger };