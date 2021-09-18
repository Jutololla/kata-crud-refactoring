import React from 'react';
import Panel from 'emerald-ui/lib/Panel';
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';
import Icon from 'emerald-ui/lib/Icon';

const GroupList = () => {




    return (<Panel>
        <Panel.Body>
            
            <TextField label="Label" />
            <Button>
                <Icon name="thumb_up" />
                <span>Default</span>
            </Button>
        </Panel.Body>
    </Panel>

    );
}

export default GroupList;