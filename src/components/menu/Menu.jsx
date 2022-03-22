import React, { useState } from 'react';
import { Header } from './Header.jsx';
import { Search } from './Search.jsx';
import { Conversations } from './Conversations.jsx';
const Menu = () => {
    const [text,setText] = useState('');
    return (<>
        <Header />
        <Search setText={setText} />
        <Conversations text={text} />
    </>);
};
export { Menu };