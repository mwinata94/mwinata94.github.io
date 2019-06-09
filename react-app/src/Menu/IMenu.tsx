import { IContext } from './Context';
import { CSSProperties } from 'react';

export interface IMenu {
  getBackground: () => string;
  getColor: () => string;
  getIconFaName: () => string;
  getContext: () => IContext;
  setStyleActivate: () => void;
  setStyleDeactivate: () => void;
  setStyleShow: () => void;
  setStyleHide: () => void;
  updateStyle: (newStyle: CSSProperties) => void;
  onClick: () => void;
  activate: () => void;
  deactivate: () => void;
  show: () => void;
  hide: () => void;
}

export interface IMenuProps {
  show: boolean;
}

export interface IMenuState {
  activate: boolean;
  hover: boolean;
  style: CSSProperties;
  styleBackground: string;
}
