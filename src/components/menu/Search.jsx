import React from 'react';
import { Box, makeStyles, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const useStyle = makeStyles(theme => ({
    component: {
        background: '#f6f6f6',
        height:43,
        display:'flex',
        alignItems:'center'
    },
    search: {
        position: 'relative',
        borderRadius: 18,
        backgroundColor: '#ffffff',
        margin:'0px 13px',
        width: '100%'
    },
    searchIcon: {
        color:'#919191',
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        width:'100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `65px`,
        fontSize:'14px',
        height:'15px',
        width: '100%',
        
    }
}));
const Search = ({setText}) => {
    const classes = useStyle();
    return (<>
        <Box className={classes.component}>
            <Box className={classes.search}>
                <Box className={classes.searchIcon}>
                    <SearchIcon fontSize='small' />
                </Box>
                <InputBase
                    placeholder="Search or start a new chat"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e)=>{setText(e.target.value)}}
                />
            </Box>
        </Box>
    </>);
};
export { Search };