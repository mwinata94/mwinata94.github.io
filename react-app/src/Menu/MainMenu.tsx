import { IContext } from './Context';
import { IMenu } from './IMenu';
import { Menu } from './Menu';
import React from 'react';

export class MainMenu extends Menu implements IMenu {
  getIconFaName = (): string => 'fa fa-power-off';
  getContext = (): IContext => {
    return () => <></>;
  };
  setStyleActivate = (): void => {
    this.setState({ styleBackground: '220, 20, 60' }, () =>
      this.updateStyle({
        background: this.getBackground(),
        transform: this.state.hover ? 'scale(1.2)' : 'scale(1.0)'
      })
    );
  };
  setStyleDeactivate = (): void => {
    this.setState({ styleBackground: '50, 205, 50' }, () =>
      this.updateStyle({
        background: this.getBackground(),
        transform: this.state.hover ? 'scale(1.2)' : 'scale(1.0)'
      })
    );
  };
  setStyleShow = (): void => {
    this.setState({ styleBackground: '50, 205, 50' }, () =>
      this.updateStyle({
        opacity: 1,
        background: this.getBackground(),
        color: this.getColor(),
        transform: this.state.hover ? 'scale(1.2)' : 'scale(1.0)'
      })
    );
  };
  setStyleHide = (): void => {
    this.updateStyle({
      opacity: 0,
      transform: this.state.hover ? 'scale(1.2)' : 'scale(1.0)'
    });
  };
}
