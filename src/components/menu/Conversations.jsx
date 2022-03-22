import React, { useContext, useEffect, useState } from 'react';
import { getUsers } from '../../service/api.js';
import { Box, makeStyles } from '@material-ui/core';
import { Conversation } from './Conversation.jsx';
import {AccountContext} from '../../context/AccountProvider.jsx';
const useStyle = makeStyles({
    component:{
        height:'82vh',
        overflow:'overlay'
    }
});
const Conversations = ({text})=>{
    const [users,setUsers] = useState([]);
    const {socket,account,setActiveUsers} = useContext(AccountContext);
    const classes = useStyle();
    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await getUsers();
            const filteredData = data.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filteredData);
        };
        fetchData();
    },[text]);
    useEffect(()=>{
        socket.current.emit('addUser',account.googleId);
        socket.current.on('getUsers',users=>{setActiveUsers(users)});
    },[account]);
    return (<>
    <Box className={classes.component}>
        {users.map(user=>(
            user.googleId !== account.googleId &&
            <Conversation user={user}/>
        ))}
    </Box>
    </>);
};
export {Conversations};