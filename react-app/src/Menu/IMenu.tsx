import { IContext } from './Context';
import { CSSProperties } from 'react';

export interface IMenu {
  getIconFaName(): string;
  getContext(): IContext;
  getStyleActivate(): CSSProperties;
  getStyleDeactivate(): CSSProperties;
  getStyleShow(): CSSProperties;
  getStyleHide(): CSSProperties;
  onClick(): void;
  activate(): void;
  deactivate(): void;
  show(): void;
  hide(): void;
}

export interface IMenuProps {
  show: boolean;
}

export interface IMenuState {
  activate: boolean;
  style: CSSProperties;
}
