import { IContext, bugContext } from '../Context';
import { Menu } from '../Menu';

export class BugMenu extends Menu {
  getIconFaName = (): string => 'fa fa-bug';
  getContext = (): IContext => bugContext;
  getMenuName = (): string => 'bug';
  onClick = (): void => {
    this.toggleClassActivated();
    this.state.activated
      ? this.props.onSubMenuDeactivate && this.props.onSubMenuDeactivate()
      : this.props.onSubMenuActivate && this.props.onSubMenuActivate('bug');
    this.setState({ activated: !this.state.activated });
  };
}
