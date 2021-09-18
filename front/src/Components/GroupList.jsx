import React, { useEffect, useContext } from 'react';
import Panel from 'emerald-ui/lib/Panel';
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';
import Icon from 'emerald-ui/lib/Icon';
import Store from './Store';
import List from './List';
import Form from './Form';


const GroupList = () => {

    const { dispatch, state: { groupList } } = useContext(Store);

    useEffect(() => {
        fetch("http://localhost:8080/api/grouplists")
            .then(response => response.json())
            .then((groupList) => {
                dispatch({ type: "update-groupList", groupList })
            })
    }, []);


    return (
        groupList.map((groupList) => {
            return (<Panel key={groupList.id}>
                <Panel.Body>
                    <h1>{groupList.name}</h1>
                   <Form groupListId={groupList.id}  />
                   <List groupListId={groupList.id}/>
                    </Panel.Body>
            </Panel>
            )
        })
    );
}

export default GroupList;