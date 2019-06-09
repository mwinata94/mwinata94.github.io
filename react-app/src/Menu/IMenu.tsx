import { ICSSProperties } from './ICSSProperties';

export interface IMenu {
  getIconFaName(): string;
  getContext(): import('./Context').IContext;
  getStyleActivate(): ICSSProperties;
  getStyleDeactivate(): ICSSProperties;
  getStyleShow(): ICSSProperties;
  getStyleHide(): ICSSProperties;
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
  style: ICSSProperties;
}
