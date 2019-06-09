import { IContext } from './Context';
import { IMenu } from './IMenu';
import { Menu } from './Menu';
import { CSSProperties } from 'react';

export class MainMenu extends Menu implements IMenu {
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
      borderRadius: '50%',
      width: '2em',
      height: '2em',
      fontSize: '3em',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(50, 205, 50, 0.6)',
      color: 'rgba(255, 255, 255, 0.6)',
      transition: 'background 0.3s, color 0.3s, transform 0.3s'
    };
  }
  getStyleHide(): CSSProperties {
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
