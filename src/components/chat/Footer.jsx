import { makeStyles, Box, InputBase } from '@material-ui/core';
import React from 'react';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
const useStyle = makeStyles(theme=>({
    footer: {
        height: '58px',
        background: '#ededed',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        '& > *': {
            margin: 5,
            color: '#919191'
        }
    },
    clipIcon: {
        transform: 'rotate(40deg)'
    },
    inputRoot: {
        width:'100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 25,
        fontSize:14,
        width: '100%',
        height:24
    },
    searchBox:{
        background:'#fff',
        borderRadius:18,
        width:'calc(95% - 100px)'
    }
}));
const Footer = ({sendText,setValue,value}) => {
    const classes = useStyle();
    return (<>
        <Box className={classes.footer}>
            <EmojiEmotionsOutlinedIcon />
            <AttachFileIcon className={classes.clipIcon} />
            <Box className={classes.searchBox}>
                <InputBase
                    placeholder='Type a message'
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onKeyPress={(e)=>sendText(e)}
                    onChange={(e)=>setValue(e.target.value)}
                    value = {value}
                />
            </Box>
            <MicIcon />
        </Box>
    </>);
};
export { Footer };