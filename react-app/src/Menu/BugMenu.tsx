import { IContext } from './Context';
import { IMenu, IMenuProps } from './IMenu';
import { Menu } from './Menu';
import React from 'react';

export class BugMenu extends Menu implements IMenu {
  componentWillReceiveProps = (newProps: IMenuProps): void => {
    console.log(newProps.hide);
    if (this.state.hidden !== newProps.hide) {
      this.setState(
        {
          hidden: newProps.hide
        },
        () => this.toggleClassHide()
      );
    }
  };

  getIconFaName = (): string => 'fa fa-bug';
  getContext = (): IContext => (): JSX.Element => <></>;
  getMenuName = (): string => 'bug';

  onClick = (): void => {
    // to do
  };
}
