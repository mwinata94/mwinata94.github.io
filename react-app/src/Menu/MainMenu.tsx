import { IMenu } from './IMenu';
import { Menu } from './Menu';
import { ICSSProperties } from './ICSSProperties';

export class MainMenu extends Menu implements IMenu {
  getIconFaName = (): string => 'fa fa-power-off';
  getContext(): import('./Context').IContext {
    throw new Error('Method not implemented.');
  }
  getStyleActivate(): ICSSProperties {
    throw new Error('Method not implemented.');
  }
  getStyleDeactivate(): ICSSProperties {
    throw new Error('Method not implemented.');
  }
  getStyleShow(): ICSSProperties {
    return {
      position: 'absolute',
      top: '50%',
      left: '50%',
      '&:hover': {
        transform: 'scale(1.2)'
      }
    };
  }
  getStyleHide(): ICSSProperties {
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
