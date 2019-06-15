import { IContext } from '../Context';
import { Menu } from '../Menu';
import React from 'react';

export class LinkedinMenu extends Menu {
  getIconFaName = (): string => 'fab fa-linkedin-in';
  getContext = (): IContext => (): JSX.Element => <></>;
  getMenuName = (): string => 'linkedin';
  onClick = (): void => {
    window.location.assign('https://www.linkedin.com/in/michael-winata/');
  };
}
