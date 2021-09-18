import React from 'react';
import StoreProvider from './Components/StoreProvider';
import 'emerald-ui/lib/styles-ec.css';
import GroupList from './Components/GroupList';
import GroupCreator from './Components/GroupCreator';


function App() {
  return (<StoreProvider>
    <h3>To-Do List</h3>
    <GroupCreator />
    <GroupList />
  </StoreProvider>
  )
}

export default App;
