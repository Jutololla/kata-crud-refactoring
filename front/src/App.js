import React from 'react';
import Form from './Components/Form';
import List from './Components/List';
import StoreProvider from './Components/StoreProvider';

function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
}

export default App;
