import React, { useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider.jsx';
import { HeaderMenu } from './HeaderMenu.jsx';
import { InfoDrawer } from '../drawer/InfoDrawer.jsx';
const useStyle = makeStyles({
    header:{
        height:'35px',
        background:'#ededed',
        padding:'10px 16px',
        display:'flex',
        alignItems:'center'
    },
    avatar:{
        height:'37px',
        width:'37px',
        borderRadius:'50%'
    },
    icons:{
        marginLeft:'auto',
        '& > *':{
            marginLeft:2,
            padding:8,
            color:'#919191'
        },
        '& :first-child':{
            fontSize:'22px',
            marginRight:'8px',
            marginTop:'3px'
        }
    }

});
const Header = () => {
    const classes = useStyle();
    const {account} = useContext(AccountContext);
    const [open,setOpen] = useState(false);
    const toggelDrawer = ()=>{
        setOpen(true);
    };
    return (<>
        <Box className={classes.header}>
            <img src={account.imageUrl} onClick={()=>toggelDrawer()} alt="Account-picture" className={classes.avatar} />
            <Box className={classes.icons}>
                <ChatIcon />
                <HeaderMenu />
            </Box>
        </Box>
        <InfoDrawer open={open} setOpen={setOpen}/>
    </>);
};
export { Header };