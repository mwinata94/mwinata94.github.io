import { IContext } from './Context';
import { IMenu, IMenuProps } from './IMenu';
import { Menu } from './Menu';
import React from 'react';

export class MainMenu extends Menu implements IMenu {
  getIconFaName = (): string => 'fa fa-power-off';
  getContext = (): IContext => (): JSX.Element => <></>;
  setStyleActivate = (props: IMenuProps): void => {
    this.setState({ styleBackground: '220, 20, 60' }, () =>
      this.updateStyle({
        zIndex: 500,
        background: this.getBackground(),
        transform: this.getTransform(props)
      })
    );
  };
  setStyleDeactivate = (props: IMenuProps): void => {
    this.setState({ styleBackground: '50, 205, 50' }, () =>
      this.updateStyle({
        zIndex: 500,
        background: this.getBackground(),
        transform: this.getTransform(props)
      })
    );
  };
  setStyleShow = (props: IMenuProps): void => {
    this.setState({ styleBackground: '50, 205, 50' }, () =>
      this.updateStyle({
        zIndex: 500,
        opacity: 1,
        background: this.getBackground(),
        color: this.getColor(),
        transform: this.getTransform(props)
      })
    );
  };
  setStyleHide = (props: IMenuProps): void => {
    this.updateStyle({
      zIndex: 500,
      opacity: 0,
      transform: this.getTransform(props)
    });
  };

  onClick = (): void => {
    if (this.state.activate) {
      this.deactivate();
      if (this.props.onMainMenuDeactivate) {
        this.props.onMainMenuDeactivate();
      }
    } else {
      this.activate();
      if (this.props.onMainMenuActivate) {
        this.props.onMainMenuActivate();
      }
    }
  };
}
