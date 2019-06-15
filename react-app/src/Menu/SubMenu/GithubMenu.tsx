import { IContext } from '../Context';
import { SubMenu } from './SubMenu';
import React from 'react';

export class GithubMenu extends SubMenu {
  getIconFaName = (): string => 'fab fa-github';
  getContext = (): IContext => (): JSX.Element => <></>;
  getMenuName = (): string => 'github';
  onClick = (): void => {
    window.location.assign('https://github.com/mwinata94');
  };
}
