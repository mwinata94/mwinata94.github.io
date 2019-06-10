import { IContext } from './Context';
import { CSSProperties } from 'react';

export interface IMenu {
  getBackground: () => string;
  getColor: () => string;
  getTransform: (props: IMenuProps) => string;
  getIconFaName: () => string;
  getContext: () => IContext;
  setStyleActivate: (props: IMenuProps) => void;
  setStyleDeactivate: (props: IMenuProps) => void;
  setStyleShow: (props: IMenuProps) => void;
  setStyleHide: (props: IMenuProps) => void;
  updateStyle: (newStyle: CSSProperties) => void;
  onClick: () => void;
  activate: () => void;
  deactivate: () => void;
  show: () => void;
  hide: () => void;
}

export interface IMenuProps {
  show: boolean;
  onMainMenuActivate?: Function;
  onMainMenuDeactivate?: Function;
  onSubMenuActivate?: Function;
  onSubMenuDeactivate?: Function;
}

export interface IMenuState {
  activate: boolean;
  hover: boolean;
  style: CSSProperties;
  styleBackground: string;
}
