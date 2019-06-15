import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import { IAppProps } from './IAppProps';
import { IAppState } from './IAppState';
import { MainMenu } from './Menu/MainMenu';
import { SubMenuArray } from './Menu/SubMenu';

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
      | 'linkedin'
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
    return (
      <div className='App hero is-fullheight is-dark flex-center-content'>
        <MainMenu
          hide={'' !== this.state.activeSubMenu}
          onMainMenuActivate={this.onMainMenuActivate}
          onMainMenuDeactivate={this.onMainMenuDeactivate}
        />
        {SubMenuArray.map((SubMenuClass, i: number) => (
          <SubMenuClass
            key={i}
            hide={
              !this.state.activeMainMenu ||
              ('' !== this.state.activeSubMenu &&
                new SubMenuClass({ hide: true }, null).getMenuName() !==
                  this.state.activeSubMenu)
            }
            onSubMenuActivate={this.onSubMenuActivate}
            onSubMenuDeactivate={this.onSubMenuDeactivate}
          />
        ))}
      </div>
    );
  };
}

export default App;
