export interface IMenu {
  getIconFaName(): string;
  getContext(): import('./Context').IContext;
  getStyleActivate(): import('react').CSSProperties;
  getStyleDeactivate(): import('react').CSSProperties;
  getStyleShow(): import('react').CSSProperties;
  getStyleHide(): import('react').CSSProperties;
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
  style: import('react').CSSProperties;
}
