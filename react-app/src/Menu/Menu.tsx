import { IContext } from './Context';
import React from 'react';
import { IMenu, IMenuProps, IMenuState } from './IMenu';

export abstract class Menu extends React.Component<IMenuProps, IMenuState>
  implements IMenu {
  abstract getIconFaName: () => string;
  abstract getContext: () => IContext;
  abstract getMenuName: () => string;
  abstract onClick: () => void;

  toggleClassName = (className: string) => {
    let classList: string[] = this.state.className.split(' ');
    let index: number = classList.indexOf(className);
    if (-1 === index) {
      classList.push(className);
    } else {
      classList.splice(index, 1);
    }
    this.setState({
      className: classList.join(' ')
    });
  };

  toggleClassActivated = (): void => {
    this.toggleClassName('activated');
  };

  toggleClassHide = (): void => {
    this.toggleClassName('hide');
  };

  state = {
    className: 'flex-center-content menu',
    activated: false,
    hidden: this.props.hide
  };

  componentDidMount = () => {
    let className: string = this.state.className;
    this.setState(
      {
        className: className + ' ' + this.getMenuName()
      },
      () => {
        this.props.hide && this.toggleClassHide();
      }
    );
  };

  render = () => (
    <>
      {
        <>
          <div className={this.state.className} onClick={this.onClick}>
            <i className={this.getIconFaName()} />
          </div>
          {this.state.activated && !this.state.hidden && this.getContext()()}
        </>
      }
    </>
  );
}
