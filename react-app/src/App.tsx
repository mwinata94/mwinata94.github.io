import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { IAppProps } from './IAppProps';
import { IAppState } from './IAppState';
import { MainMenu } from './Menu/MainMenu';
import { GithubMenu } from './Menu/GithubMenu';

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: React.ReactPropTypes) {
    super(props);
    this.state = {
      activeMainMenu: false,
      activeSubMenu: ''
    };
  }

  onMainMenuActivate = () => {
    this.setState({
      activeMainMenu: true,
      activeSubMenu: ''
    });
  };

  onMainMenuDeactivate = () => {
    this.setState({
      activeMainMenu: false,
      activeSubMenu: ''
    });
  };

  onSubMenuActivate = (
    activeSubMenu:
      | 'github'
      | 'linkedIn'
      | 'question'
      | 'bug'
      | 'information'
      | 'list'
      | ''
  ) => {
    this.setState({
      activeSubMenu
    });
  };

  onSubMenuDeactivate = () => {
    this.setState({
      activeSubMenu: ''
    });
  };

  render = () => {
    console.log('' === this.state.activeSubMenu && this.state.activeMainMenu);
    return (
      <div
        className='App hero is-fullheight is-dark'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <MainMenu
          show={'' === this.state.activeSubMenu}
          onMainMenuActivate={this.onMainMenuActivate}
          onMainMenuDeactivate={this.onMainMenuDeactivate}
        />
        <GithubMenu
          show={'' === this.state.activeSubMenu && this.state.activeMainMenu}
          onSubMenuActivate={this.onSubMenuActivate}
          onSubMenuDeactivate={this.onSubMenuDeactivate}
        />
      </div>
    );
  };
}

export default App;
