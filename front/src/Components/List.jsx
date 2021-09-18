import React, { useContext, useEffect } from 'react';
import { HOST_API } from './Form';
import Table from 'emerald-ui/lib/Table';
import Button from 'emerald-ui/lib/Button';
import Store from './Store';


export const List = ({groupListId}) => {

  const { dispatch, state: { todo } } = useContext(Store);
  const currentList = todo.list;

  useEffect(() => {
    fetch(HOST_API + "/todos")
      .then(response => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list })
      })
  }, []);


  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todo", {
      method: "DELETE"
    }).then((list) => {
      dispatch({ type: "delete-item", id })
    })
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo })
  };

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked
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
      });
  };

  const decorationDone = {
    textDecoration: 'line-through'
  };
  return <div>
    <Table striped>
      <thead >
        <tr>
          <th  >ID</th>
          <th >Tarea</th>
          <th >¿Completado?</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {currentList
        .filter(todo=> todo.groupListId==groupListId)
        .map((todo) => {
          return <tr key={todo.id} >
            <td>{todo.id}</td>
            <td>{todo.name}</td>
            <td><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input></td>
            <td><Button onClick={() => onDelete(todo.id)}>Eliminar

              </Button></td>
            <td><Button onClick={() => onEdit(todo)}>Editar

              </Button></td>
          </tr>
        })}
      </tbody>
    </Table>
  </div>
}

export default List;