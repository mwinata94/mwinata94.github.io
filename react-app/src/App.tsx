import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MainMenu } from './Menu/MainMenu';

class App extends React.Component {
  render = () => (
    <div
      className='App hero is-fullheight is-dark'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <MainMenu show={true} />
    </div>
  );
}

export default App;
