import { IContext } from '../Context';
import { SubMenu } from './SubMenu';
import React from 'react';

export class BugMenu extends SubMenu {
  getIconFaName = (): string => 'fa fa-bug';
  getContext = (): IContext => (): JSX.Element => <></>;
  getMenuName = (): string => 'bug';
  onClick = (): void => {
    // to do
  };
}
