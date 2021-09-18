import React, { Fragment, useState, useContext } from 'react';
import Button from 'emerald-ui/lib/Button';
import TextField from 'emerald-ui/lib/TextField';
import Store from './Store';

const GroupCreator = () => {

    const { dispatch } = useContext(Store);
    const [groupName, setGroupName] = useState("")

    const onAdd = () =>{
        const request = {
            name: groupName}

        fetch("http://localhost:8080/api/grouplist", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(response => response.json())
          .then((groupList)=>{
              console.log(groupList);
              dispatch({
                 type: "add-groupList", item: groupList 
              })
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