import { IContext, listContext } from '../Context';
import { Menu } from '../Menu';

export class ListMenu extends Menu {
  getIconFaName = (): string => 'fa fa-list';
  getContext = (): IContext => listContext;
  getMenuName = (): string => 'list';
  onClick = (): void => {
    this.toggleClassActivated();
    this.state.activated
      ? this.props.onSubMenuDeactivate && this.props.onSubMenuDeactivate()
      : this.props.onSubMenuActivate &&
        this.props.onSubMenuActivate(this.getMenuName());
    this.setState({ activated: !this.state.activated });
  };
}
