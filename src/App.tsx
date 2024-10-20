import React from 'react';
import UserList from './components/UserList';
import styles from './App.module.scss';


const App: React.FC = () => {
  return (
  <div className={styles.app}>
    <h1>User Dashboard</h1>
    <UserList />
  </div>
  );
};

export default App;