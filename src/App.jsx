import React from 'react';
import TextField from './components/TextField/TextField';

const App=()=> {
  return (
    <div>
      <TextField value="disabled" disabled={true} heading="This is Disabled Input"/>
      <TextField value="Accessible" disabled={false} heading="A Valid Input"/>
      <TextField value="101" disabled={false} heading="An Input with Errors" error={true} class="red"/>
    </div>
  );
}

export default App;
