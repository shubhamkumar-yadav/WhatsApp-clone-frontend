import React, { useContext } from 'react';
import { UserContext } from '../../context/UserProvider.jsx';
import { Box,makeStyles,Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AccountContext } from '../../context/AccountProvider.jsx';
const useStyle = makeStyles({
    header:{
        display:'flex',
        height:35,
        background:'#ededed',
        padding:'10px 16px',
        alignItems:'center'
    },
    dp:{
        width:37,
        height:37,
        borderRadius:'50%',
        padding:'0px 2px'
    },
    name:{
        marginLeft:'10px'
    },
    status:{
        fontSize:12,
        marginLeft:10,
        color:'rgba(0,0.5,0,0.6)'
    },
    rightContainer:{
        marginLeft:'auto',
        '& > *':{
            padding:8,
            fontSize:22,
            color:'#919191'
        }
    }
});
const ChatHeader = ()=>{
    const classes = useStyle();
    const {person} = useContext(UserContext);
    const {activeUsers} = useContext(AccountContext);
    return (<>
    <Box className={classes.header}>
        <img src={person.imageUrl} alt="PersonImage" className={classes.dp} />
        <Box>
            <Typography className={classes.name}>{person.name}</Typography>
            <Typography className={classes.status}>
                {activeUsers?.find(user=>user.userId===person.googleId) ? 'Online' : 'Offline'}
            </Typography>
        </Box>
        <Box className={classes.rightContainer}>
            <SearchIcon />
            <MoreVertIcon />
        </Box>
    </Box>
    </>);
};
export {ChatHeader};