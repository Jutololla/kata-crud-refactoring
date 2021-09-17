import React from 'react';
import { HOST_API } from './Form';
import { useEffect } from 'react'; 
import { useContext } from 'react';
import { Store } from './Form';

const GroupListForm = () => {

    const { dispatch, state: 0 } = useContext(Store);
    const currentList = todo.list;

    useEffect(() => {
        fetch(HOST_API + "/grouplists")
          .then(response => response.json())
          .then((list) => {
            dispatch({ type: "update-list", list })
          })
      }, [dispatch]);

    return ( <div>
        <table >
          <thead>
            <tr>
              <td>ID</td>
              <td>Tarea</td>
              <td>¿Completado?</td>
            </tr>
          </thead>
          <tbody>
            {currentList.map((todo) => {
              return <tr key={todo.id} >
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                </tr>
            })}
          </tbody>
        </table>
      </div>
      );
}
 
export default GroupListForm;