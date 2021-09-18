import React, { Fragment } from 'react';
import Form from './Components/Form';
import List from './Components/List';
import StoreProvider from './Components/StoreProvider';
import 'emerald-ui/lib/styles-ec.css';
import GroupList from './Components/GroupList';
import GroupCreator from './Components/GroupCreator';


function App() {
  return (<StoreProvider>
    <h3>To-Do List</h3>
    {/* <Form />
    <List /> */}
    <GroupCreator />
    <GroupList />
  </StoreProvider>
  )
}

export default App;
