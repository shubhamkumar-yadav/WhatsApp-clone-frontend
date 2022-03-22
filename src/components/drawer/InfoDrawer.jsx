import React from 'react';
import {Drawer,Box, Typography, makeStyles} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Profile } from './Profile.jsx';
const useStyle = makeStyles({
    header:{
        background:'#00bfa5',
        height:97,
        color:'#fff',
        display:'flex',
        '& > *':{
            marginTop:'auto',
            padding:'15px',
            fontWeight:600
        }
    },
    component:{
        background:'#ededed',
        height:'86.5%'
    }
});
const InfoDrawer = ({open,setOpen})=>{
    const classes = useStyle();
    const handleClose =()=>{
        setOpen(false);
    };
    return (<>
    <Drawer open={open} onClose={handleClose}>
        <Box className={classes.header}>
            <ArrowBackIcon onClick={()=>handleClose()} />
            <Typography>Profile</Typography>
        </Box>
        <Box className={classes.component}>
            <Profile />
        </Box>
    </Drawer>
    </>);
};
export {InfoDrawer};