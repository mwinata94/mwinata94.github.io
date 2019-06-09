import { IContext } from './Context';
import { IMenu } from './IMenu';
import { Menu } from './Menu';
import { CSSProperties } from 'react';

export class MainMenu extends Menu implements IMenu {
  getBackground(opacity: number): string {
    return `rgba(50, 205, 50, ${opacity})`;
  }
  getColor(opacity: number): string {
    return `rgba(255, 255, 255, ${opacity})`;
  }
  getIconFaName = (): string => 'fa fa-power-off';
  getContext(): IContext {
    throw new Error('Method not implemented.');
  }
  getStyleActivate(): CSSProperties {
    throw new Error('Method not implemented.');
  }
  getStyleDeactivate(): CSSProperties {
    throw new Error('Method not implemented.');
  }
  getStyleShow(): CSSProperties {
    return {
      opacity: 1,
      background: this.getBackground(0.6),
      color: this.getColor(0.6),
      transition: 'background 0.3s, color 0.3s, transform 0.3s'
    };
  }
  getStyleHide(): CSSProperties {
    return {
      opacity: 0
    };
  }
  onClick = (): void => {
    if (this.state.activate) {
      this.deactivate();
    } else {
      this.activate();
    }
  };
}
