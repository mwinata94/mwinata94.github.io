import { IContext } from '../Context';
import { IMenu, IMenuProps } from '../IMenu';
import { Menu } from '../Menu';

export abstract class SubMenu extends Menu implements IMenu {
  abstract getIconFaName: () => string;
  abstract getContext: () => IContext;
  abstract getMenuName: () => string;
  abstract onClick: () => void;

  componentWillReceiveProps = (newProps: IMenuProps): void => {
    if (this.state.hidden !== newProps.hide) {
      this.setState(
        {
          hidden: newProps.hide
        },
        () => this.toggleClassHide()
      );
    }
  };
}
