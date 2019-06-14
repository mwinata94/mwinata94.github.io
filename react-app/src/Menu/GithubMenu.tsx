import { IContext } from './Context';
import { IMenu, IMenuProps } from './IMenu';
import { Menu } from './Menu';
import React from 'react';

export class GithubMenu extends Menu implements IMenu {
  componentWillReceiveProps = (newProps: IMenuProps): void => {
    if (this.state.hidden !== newProps.hide) {
      this.setState(
        {
          hidden: newProps.hide
        },
        () => this.toggleClassHide()
      );
    }
  };

  getIconFaName = (): string => 'fab fa-github';
  getContext = (): IContext => (): JSX.Element => <></>;
  getMenuName = (): string => 'github';

  onClick = (): void => {
    window.location.assign('https://github.com/mwinata94');
  };
}
