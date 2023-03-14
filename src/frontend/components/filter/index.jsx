import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { padding } from '@mui/system';

export function Filter() {
    const changes = [
        { label: 'Pynthon', id: 1 },
        { label: 'Javascript', id: 2 },
        { label: 'C++', id: 3 },
    ];

    return (
        <div id="filter" style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 10 }}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={changes}
                sx={{ width: 178 }}
                style={{ height: '30px', padding: "30px", }}
                renderInput={(params) => <TextField {...params} label="Project Name" />}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={changes}
                sx={{ width: 178 }}
                style={{ height: '30px', padding: "30px" }}
                renderInput={(params) => <TextField {...params} label="Select tags" />}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={changes}
                sx={{ width: 178 }}
                style={{ height: '30px', padding: "30px" }}
                renderInput={(params) => <TextField {...params} label="Status" />}
            />
        </div>

    )
}