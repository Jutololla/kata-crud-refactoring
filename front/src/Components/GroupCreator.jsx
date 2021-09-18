import React, { Fragment, useState } from 'react';
import Button from 'emerald-ui/lib/Button';
import TextField from 'emerald-ui/lib/TextField';
import { HOST_API } from './Form';

const GroupCreator = () => {


    const [groupName, setGroupName] = useState("")


    /* useEffect(() => {
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
    }; */



    const onAdd = () =>{
        const request = {
            name: groupName}

        fetch("http://localhost:8080/api/grouplist", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(()=>{
              setGroupName("");
          })
        }
           

    const updateTextbox = (event) => {
        setGroupName(event.target.value);




    };










    return (<Fragment>

        <TextField value={groupName} label="Label" onChange={updateTextbox} />
        <Button disabled={!groupName} onClick={onAdd}>Agregar</Button>
       
       </Fragment>


        );
}

        export default GroupCreator;