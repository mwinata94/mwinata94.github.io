import { IContext } from './Context';
import { Menu } from './Menu';
import React from 'react';

export class MainMenu extends Menu {
  getIconFaName = (): string => 'fa fa-power-off';
  getContext = (): IContext => (): JSX.Element => <></>;
  getMenuName = (): string => 'main';
  onClick = (): void => {
    this.toggleClassActivated();
    this.state.activated
      ? this.props.onMainMenuDeactivate && this.props.onMainMenuDeactivate()
      : this.props.onMainMenuActivate && this.props.onMainMenuActivate();
    this.setState({ activated: !this.state.activated });
  };
}
