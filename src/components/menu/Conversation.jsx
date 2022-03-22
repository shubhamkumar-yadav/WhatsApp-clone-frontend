import React, { useContext } from "react";
import { Box,makeStyles,Typography } from "@material-ui/core";
import {AccountContext} from '../../context/AccountProvider.jsx';
import { setConversation } from "../../service/api.js";
import {UserContext} from '../../context/UserProvider.jsx';
const useStyle = makeStyles({
    displayPicture:{
        width:50,
        height:50,
        borderRadius:'50%',
        padding:'0px 14px'
    },
    component:{
        display:'flex',
        height:40,
        padding:'13px 0px',
        cursor:'pointer'
    }
});
const Conversation = ({user})=>{
    const classes = useStyle();
    const {account} = useContext(AccountContext);
    const setUser = async ()=>{
        await setConversation({senderId:account.googleId,receiverId:user.googleId});
        setPerson(user);
    };
    const {setPerson} = useContext(UserContext);
    return (<>
    <Box className={classes.component} onClick={()=>setUser()}>
        <Box>
            <img src={user.imageUrl} alt="userImage" className={classes.displayPicture} />
        </Box>
        <Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Box>
    </Box>
    </>);
};
export {Conversation};