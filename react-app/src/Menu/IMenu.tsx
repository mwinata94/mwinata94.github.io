import { IContext } from './Context';

export interface IMenu {
  getIconFaName: () => string;
  getContext: () => IContext;
  getMenuName: () => string;
  toggleClassActivated: () => void;
  toggleClassHide: () => void;
  onClick: () => void;
}

export interface IMenuProps {
  hide: boolean;
  onMainMenuActivate?: Function;
  onMainMenuDeactivate?: Function;
  onSubMenuActivate?: Function;
  onSubMenuDeactivate?: Function;
}

export interface IMenuState {
  className: string;
  activated: boolean;
  hidden: boolean;
}
