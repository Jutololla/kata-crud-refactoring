import React, { Fragment } from 'react';
import Form from './Components/Form';
import GroupListForm from './Components/GroupListForm';
import List from './Components/List';
import StoreProvider from './Components/StoreProvider';

function App() {
  return <Fragment>
   <div>
  <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
  </div>
  <div>
    <GroupListForm/>
  </div>
  </Fragment>
}

export default App;
