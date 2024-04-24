import React from 'react';
import { HomePage } from './pages/Home';
import { UsersContext } from './context/usersContext';

const App: React.FC = () => {
  return (
    <div id="App" style={{ position: 'relative', padding: '0 100px' }}>
      <UsersContext.Provider
        value={{
          user: 'You',
          contact: 'Milton Romaguera',
        }}
      >
        <HomePage />
      </UsersContext.Provider>
    </div>
  );
};

export default App;
