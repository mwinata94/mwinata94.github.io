import { IContext, informationContext } from '../Context';
import { Menu } from '../Menu';

export class InformationMenu extends Menu {
  getIconFaName = (): string => 'fa fa-info';
  getContext = (): IContext => informationContext;
  getMenuName = (): string => 'information';
  onClick = (): void => {
    this.toggleClassActivated();
    this.state.activated
      ? this.props.onSubMenuDeactivate && this.props.onSubMenuDeactivate()
      : this.props.onSubMenuActivate &&
        this.props.onSubMenuActivate(this.getMenuName());
    this.setState({ activated: !this.state.activated });
  };
}
