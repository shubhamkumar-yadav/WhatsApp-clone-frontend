import { Box } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { ChatHeader } from './ChatHeader.jsx';
import { Messages } from './Messages.jsx';
import { UserContext } from '../../context/UserProvider.jsx';
import { getConversation } from '../../service/api.js';
import { AccountContext } from '../../context/AccountProvider.jsx';
const Chat = ()=>{
    const {person} = useContext(UserContext);
    const {account} = useContext(AccountContext);
    const [conversation,setConversation] = useState({});
    useEffect(()=>{
        const getConversationDetails= async ()=>{
            let data = await getConversation({sender:account.googleId,receiver:person.googleId});
            setConversation(data);
        }
        getConversationDetails();
    },[person.googleId]);
    return (<>
    <Box>
        <ChatHeader />
        <Messages conversation={conversation} person={person} />
    </Box>
    </>);
};
export {Chat};