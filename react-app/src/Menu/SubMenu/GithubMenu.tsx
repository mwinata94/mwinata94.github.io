import { IContext } from '../Context';
import { Menu } from '../Menu';
import React from 'react';

export class GithubMenu extends Menu {
  getIconFaName = (): string => 'fab fa-github';
  getContext = (): IContext => (): JSX.Element => <></>;
  getMenuName = (): string => 'github';
  onClick = (): void => {
    window.location.assign('https://github.com/mwinata94');
  };
}
