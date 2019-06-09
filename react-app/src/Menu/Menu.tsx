import { IContext } from './Context';
import React, { CSSProperties } from 'react';
import { IMenu, IMenuProps, IMenuState } from './IMenu';

export abstract class Menu extends React.Component<IMenuProps, IMenuState>
  implements IMenu {
  abstract getIconFaName(): string;
  abstract getContext(): IContext;
  abstract getStyleActivate(): CSSProperties;
  abstract getStyleDeactivate(): CSSProperties;
  abstract getStyleShow(): CSSProperties;
  abstract getStyleHide(): CSSProperties;
  abstract onClick(): void;

  onMouseEnter = (_: any): void => {
    let newStyle: CSSProperties = { ...this.state.style };
    newStyle.background = 'rgba(50, 205, 50, 1.0)';
    newStyle.color = 'rgba(255, 255, 255, 1.0)';
    newStyle.transform = 'scale(1.2)';
    this.setState({ style: newStyle });
  };

  onMouseLeave = (_: any): void => {
    let newStyle: CSSProperties = { ...this.state.style };
    newStyle.background = 'rgba(50, 205, 50, 0.6)';
    newStyle.color = 'rgba(255, 255, 255, 0.6)';
    newStyle.transform = 'scale(1.0)';
    this.setState({ style: newStyle });
  };

  activate = (): void => {
    this.setState({
      style: this.getStyleActivate()
    });
  };

  deactivate = (): void => {
    this.setState({
      style: this.getStyleDeactivate()
    });
  };

  show = (): void => {
    this.setState({
      style: this.getStyleShow()
    });
  };

  hide = (): void => {
    this.setState({
      style: this.getStyleHide()
    });
  };

  state = {
    activate: false,
    style: this.props.show ? this.getStyleShow() : this.getStyleHide()
  };

  render = () => (
    <>
      <div
        className='btn'
        style={this.state.style}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <i className={this.getIconFaName()} />
      </div>
      {this.state.activate && this.getContext()}
    </>
  );
}
