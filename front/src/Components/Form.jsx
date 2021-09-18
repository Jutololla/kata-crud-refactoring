import React, { useContext, useRef, useState} from 'react';

import Store from './Store';
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';

export const HOST_API = "http://localhost:8080/api";

export const Form = ({groupListId}) => {
  
    
    const formRef = useRef(null);
    const { dispatch, state: { todo } } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);
  
    const onAdd = (event) => {
      event.preventDefault();
      if(!state.name){ return;}

      const request = {
        name: state.name,
        id: null,
        completed: false,
        groupListId
      };
  
  
      fetch(HOST_API + "/todo", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "add-item", item: todo });
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  
    const onEdit = (event) => {
      event.preventDefault();
  
      const request = {
        name: state.name,
        id: item.id,
        isCompleted: item.isCompleted
      };
  
  
      fetch(HOST_API + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "update-item", item: todo });
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  
    return <form ref={formRef}>
      <TextField
        type="text"
        name="name"
        placeholder="¿Qué piensas hacer hoy?"
        defaultValue={item.name}
        onChange={(event) => {
          setState({ ...state, name: event.target.value })
        }} />                 
      {item.id && <Button onClick={onEdit}>Actualizar</Button>}
      {!item.id && <Button onClick={onAdd}>Crear</Button>}
    </form>
  }

  export default Form

