import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import { Tooltip } from '@mui/material';
import { Drawer } from '@mui/material';

function App() {
  return (
    <>
      <Tooltip title='Your Data was not submited'>
        <Button className='btn' color='error'>
          Error ⚠
        </Button>
      </Tooltip>
    </>
  );
}

export default App;
