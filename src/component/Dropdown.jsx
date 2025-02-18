import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './Api'; // Ensure this is correctly exported from './Api'

function App() {
  return (
    <Autocomplete
      disablePortal
      options={top100Films ? top100Films.map((item) => `${item.label} (${item.year})`) : []}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

export default App;