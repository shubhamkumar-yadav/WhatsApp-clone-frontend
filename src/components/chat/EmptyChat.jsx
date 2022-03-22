import React from "react";
import { Box, makeStyles } from "@material-ui/core";
const emptyChat = 'https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png';
const useStyle = makeStyles({
    component:{
        background:'#f8f9fa',
        height:'100%',
        padding:'70px 0',
        textAlign:'center'
    },
    image:{
        width:480
    }
});
const EmptyChat = () => {
    const classes = useStyle();
    return (<>
        <Box className={classes.component}>
            <img src={emptyChat} alt="emptyChat" className={classes.image} />
        </Box>
    </>);
};
export { EmptyChat };