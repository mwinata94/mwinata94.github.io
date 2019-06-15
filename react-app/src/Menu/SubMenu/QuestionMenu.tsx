import { IContext, questionContext } from '../Context';
import { Menu } from '../Menu';

export class QuestionMenu extends Menu {
  getIconFaName = (): string => 'fa fa-question';
  getContext = (): IContext => questionContext;
  getMenuName = (): string => 'question';
  onClick = (): void => {
    this.toggleClassActivated();
    this.state.activated
      ? this.props.onSubMenuDeactivate && this.props.onSubMenuDeactivate()
      : this.props.onSubMenuActivate &&
        this.props.onSubMenuActivate(this.getMenuName());
    this.setState({ activated: !this.state.activated });
  };
}
