import React, { useEffect, useContext } from 'react';
import Panel from 'emerald-ui/lib/Panel';
import Store from './Store';
import List from './List';
import Form from './Form';
import IconButton from 'emerald-ui/lib/IconButton';


const GroupList = () => {

    const { dispatch, state: { groupList } } = useContext(Store);

    useEffect(() => {
        fetch("http://localhost:8080/api/grouplists")
            .then(response => response.json())
            .then((groupList) => {
                dispatch({ type: "update-groupList", groupList })
            })
    }, [dispatch]);

    const deleteGroupList=(groupListId)=>{
        fetch("http://localhost:8080/api/"+groupListId+"/grouplist",{
        method: "DELETE"})
        .then(() => {
            dispatch({ type: "delete-groupList", id: groupListId })
        })
    }
 
    return (
        groupList.map((groupList) => {
            return (<Panel key={groupList.id}>
                <Panel.Body>
                    <h1>{groupList.name} <IconButton 
                    onClick={()=>deleteGroupList(groupList.id)}
                    ariaLabel="delete" icon="delete" title="delete" color="danger" /> </h1>                    
                   <Form groupListId={groupList.id}  />
                   <List groupListId={groupList.id}/>
                    </Panel.Body>
            </Panel>
            )
        })
    );
}

export default GroupList;