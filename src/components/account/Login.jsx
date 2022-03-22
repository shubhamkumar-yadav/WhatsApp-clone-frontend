import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Dialog, withStyles, Box, Typography, makeStyles, List, ListItem } from '@material-ui/core';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider.jsx';
import { addUser } from '../../service/api.js';

const style = {
    dialogPaper: {
        height: '95%',
        width: '60%',
        marginTop: '12%',
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%',
        overflow:'hidden'
    }
};
const useStyle = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        padding: '56px 0px 56px 56px'
    },
    rightComponent: {
        position:'relative'
    },
    qrCode: {
        height: 264,
        width: 264,
        padding: '58px 0px 0px 63px',
        marginLeft: '3rem'
    },
    title: {
        fontSize: 26,
        marginBottom: '25px',
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300
    },
    list: {
        '& > *': {
            fontSize: 18,
            padding: 0,
            marginTop: 15,
            lineHeight: "28px",
            color: "#4a4a4a"
        }
    }
});

const Login = ({ classes }) => {
    const classname = useStyle();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const clientId = "834370218751-m8cjhi7upfrfmqptj409vme68rsmq04l.apps.googleusercontent.com";
    const { account, setAccount } = useContext(AccountContext);
    const onLoginSuccess = async (res) => {
        console.log("login successful");
        setAccount(res.profileObj);
        await addUser(res.profileObj);
    };
    const onLoginFailure = () => {
        console.log("login failed");
    };
    return (<>
        <Dialog open={true} classes={{ paper: classes.dialogPaper }} BackdropProps={{ style: { backgroundColor: "unset" } }}>
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
                    <List className={classname.list}>
                        <ListItem>1. open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box className={classname.rightComponent}>
                    <img src={qrurl} alt="qr" className={classname.qrCode} />
                    <Box style={{position:'absolute',left:'57%',top:'50%'}}>
                        <GoogleLogin clientId={clientId} cookiePolicy={'single_host_origin'} buttonText="" isSignedIn={true} onSuccess={onLoginSuccess} onFailure={onLoginFailure} />
                    </Box>
                </Box>
            </Box>
        </Dialog>
    </>);
};

export default withStyles(style)(Login);