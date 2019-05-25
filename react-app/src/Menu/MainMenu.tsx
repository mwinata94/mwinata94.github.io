import React from 'react';
import { IMenu } from './IMenu';
import { Menu } from './Menu';

export class MainMenu extends Menu implements IMenu {
  getIconFaName = (): string => 'fa fa-power-off';
  getContext(): import('./Context').IContext {
    throw new Error('Method not implemented.');
  }
  getStyleActivate(): React.CSSProperties {
    throw new Error('Method not implemented.');
  }
  getStyleDeactivate(): React.CSSProperties {
    throw new Error('Method not implemented.');
  }
  getStyleShow(): React.CSSProperties {
    throw new Error('Method not implemented.');
  }
  getStyleHide(): React.CSSProperties {
    throw new Error('Method not implemented.');
  }
  onClick(): void {
    if (this.state.activate) {
      this.deactivate();
    } else {
      this.activate();
    }
  }
}
