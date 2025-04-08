import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    return (
        <div className='my-4'>
            <h5>Button MUI</h5>
            <div className='flex gap-3'>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" href="#contained-buttons">
                    Link
                </Button>
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
            </div>
        </div>
    );
}