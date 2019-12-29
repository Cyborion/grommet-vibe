import React from 'react';
import {Grommet, Heading} from 'grommet'

function App() {
  /*A requirement for grommet is to import it and use it as a top-level node.
     You can do this in App.js.*/
  return (
    <Grommet className="App">
      <Heading
        size='xlarge'
        color='#0070FF'>
        Working!
      </Heading>
    </Grommet>
  );
}

export default App;
