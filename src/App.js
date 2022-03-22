import React from 'react';
import { Messenger } from './components/Messenger.jsx';
import './App.css';
import { AccountProvider } from './context/AccountProvider.jsx';
import { TemplateProvider } from './constants/TemplateProvider.jsx';
import { UserProvider } from './context/UserProvider.jsx';

const App = () => {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export { App };
