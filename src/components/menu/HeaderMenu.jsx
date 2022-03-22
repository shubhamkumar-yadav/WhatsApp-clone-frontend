import React, { useState,useContext } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles, Menu ,MenuItem} from '@material-ui/core';
import { GoogleLogout } from 'react-google-login';
import { AccountContext } from '../../context/AccountProvider.jsx';
import { InfoDrawer } from '../drawer/InfoDrawer.jsx';
const useStyle = makeStyles({
    menuItem:{
        fontSize:'14px',
        padding:'10px 60px 5px 18px',
        color:'#4A4A4A'
    },
    logout:{
        border:'none!important',
        boxShadow:'none!important',
        '& > *':{
            padding:'0px!important'
        }
    }
});
const HeaderMenu = () => {
    const [open,setOpen] = useState(false);
    const [openDrawer,setOpenDrawer] = useState(false);
    const classes = useStyle();
    const handleClose = ()=>{
        setOpen(false);
    };
    const handleClick = (event)=>{
        setOpen(event.currentTarget);
    };
    const clientId = "834370218751-m8cjhi7upfrfmqptj409vme68rsmq04l.apps.googleusercontent.com";
    const {setAccount} = useContext(AccountContext);
    const onLogoutSuccess = ()=>{
        alert("You Have been logged out");
        console.clear();
        setAccount('');
    };
    const toggelDrawer = ()=>{
        setOpenDrawer(true);
    };
    return (<>
        <MoreVertIcon onClick={handleClick} />
        <Menu
            anchorEl={open}
            keepMounted
            open={Boolean(open)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical:"bottom",
                horizontal:"center"
            }}
            transformOrigin={{
                vertical:"top",
                horizontal:"right"
            }}
        >
            <MenuItem onClick={() => {handleClose(); toggelDrawer()}} className={classes.menuItem}>Profile</MenuItem>
            <MenuItem onClick={handleClose} className={classes.menuItem}>
                <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onLogoutSuccess} className={classes.logout}>

                </GoogleLogout>
            </MenuItem>
        </Menu>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>);
};
export { HeaderMenu };