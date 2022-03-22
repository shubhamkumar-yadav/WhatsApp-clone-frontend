import React, { createContext, useState } from 'react';
const UserContext = createContext(null);
const UserProvider = ({children})=>{
    const [person,setPerson] = useState({});
    return (
        <UserContext.Provider value={{person,setPerson}}>
            {children}
        </UserContext.Provider>
    );
};
export {UserProvider,UserContext};