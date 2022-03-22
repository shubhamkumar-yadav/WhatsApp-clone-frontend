import React, { useContext } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { AccountContext } from '../../context/AccountProvider.jsx';
const useStyle = makeStyles({
    wrapper:{
        background:'#fff',
        padding:5,
        maxWidth:'60%',
        display:'flex',
        borderRadius:10,
        width:'fit-content',
        wordBreak:'break-word'
    },
    text:{
        fontSize:14,
        padding:'0px 25px 0px 5px'
    },
    time:{
        fontSize:10,
        marginTop:'auto',
        marginTop:6,
        color:'#919191',
        wordBreak:'keep-all'
    },
    own:{
        background:'#dcf8c6',
        padding:5,
        maxWidth:'60%',
        display:'flex',
        borderRadius:10,
        width:'fit-content',
        wordBreak:'break-word',
        marginLeft:'auto'
    }
});
const Message = ({message}) => {
    const classes = useStyle();
    const {account} = useContext(AccountContext);
    const formatDate = (date)=>{
        return date < 10 ? '0'+date:date;
    };
    return (<>
        <Box className={account.googleId === message.sender ? classes.own : classes.wrapper}>
            <Typography className={classes.text}>{message.text}</Typography>
            <Typography className={classes.time}>{formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}</Typography>
        </Box>
    </>);
};
export { Message };