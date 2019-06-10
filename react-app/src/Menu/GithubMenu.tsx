import { IContext } from './Context';
import { IMenu, IMenuProps } from './IMenu';
import { Menu } from './Menu';
import React from 'react';

export class GithubMenu extends Menu implements IMenu {
  componentWillReceiveProps = (newProps: IMenuProps): void => {
    newProps.show ? this.setStyleShow(newProps) : this.setStyleHide(newProps);
  };

  getIconFaName = (): string => 'fab fa-github';

  getColor = (): string => {
    return `rgba(0, 0, 0, ${this.state.hover ? 1.0 : 0.6})`;
  };

  getContext = (): IContext => (): JSX.Element => <></>;

  getTransform = (props: IMenuProps): string => {
    let returnString = '';
    if (props.show) {
      returnString += 'translateX(-20vw) rotate(0deg) ';
    } else {
      returnString += 'translateX(0vw) rotate(-180deg)';
    }
    if (this.state.hover) {
      return returnString + 'scale(1.2) ';
    }
    return returnString + 'scale(1.0) ';
  };

  setStyleActivate = (props: IMenuProps): void => {
    this.setState({ styleBackground: '255, 255, 255' }, () =>
      this.updateStyle({
        zIndex: 50,
        background: this.getBackground(),
        color: this.getColor(),
        transform: this.getTransform(props)
      })
    );
  };

  setStyleDeactivate = (props: IMenuProps): void => {
    this.setState({ styleBackground: '255, 255, 255' }, () =>
      this.updateStyle({
        zIndex: 50,
        background: this.getBackground(),
        color: this.getColor(),
        transform: this.getTransform(props)
      })
    );
  };

  setStyleShow = (props: IMenuProps): void => {
    this.setState({ styleBackground: '255, 255, 255' }, () =>
      this.updateStyle({
        zIndex: 50,
        opacity: 1,
        background: this.getBackground(),
        color: this.getColor(),
        transform: this.getTransform(props)
      })
    );
  };

  setStyleHide = (props: IMenuProps): void => {
    this.updateStyle({
      zIndex: 50,
      opacity: 0,
      transform: this.getTransform(props)
    });
  };

  onClick = (): void => {
    window.location.assign('https://github.com/mwinata94');
  };
}
