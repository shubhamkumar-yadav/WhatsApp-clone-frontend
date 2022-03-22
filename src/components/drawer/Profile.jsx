import React, { useContext } from 'react';
import { Box, makeStyles,Typography } from '@material-ui/core';
import { AccountContext } from '../../context/AccountProvider.jsx';
const useStyle = makeStyles({
    imageContainer:{
        display:'flex',
        justifyContent:'center'
    },
    displayPicture:{
        width:'200px',
        height:'200px',
        borderRadius:'50%',
        padding:'20px 0px'
    },
    nameContainer:{
        background:'#fff',
        padding:'12px 30px 2px',
        boxShadow:'0px 1px 3px rgba(0,0,0,0.09)',
        '& :first-child':{
            fontSize:14,
            color:'#009688'
        },
        '& :last-child':{
            margin:'14px 0',
            color:'#4A4A4A'
        }
    },
    description:{
        padding:'10px 20px 28px 38px',
        '& > *':{
            fontSize:'12px',
            color:'rgba(0,0,0,0.45)'
        }
    }
});
const Profile = ()=>{
    const {account} = useContext(AccountContext);
    const classes = useStyle();
    return(<>
    <Box className={classes.imageContainer}>
        <img src={account.imageUrl} alt="UserImage" className={classes.displayPicture} />
    </Box>
    <Box className={classes.nameContainer}>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
    </Box>
    <Box className={classes.description}>
        <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
    </Box>
    <Box className={classes.nameContainer}>
        <Typography>About</Typography>
        <Typography>Do or Die</Typography>
    </Box>
    </>);
};
export {Profile};