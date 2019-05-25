import React, { CSSProperties } from 'react';
import { IMenu, IMenuProps, IMenuState } from './IMenu';

export abstract class Menu extends React.Component<IMenuProps, IMenuState>
  implements IMenu {
  abstract getIconFaName(): string;
  abstract getContext(): import('./Context').IContext;
  abstract getStyleActivate(): CSSProperties;
  abstract getStyleDeactivate(): CSSProperties;
  abstract getStyleShow(): CSSProperties;
  abstract getStyleHide(): CSSProperties;
  abstract onClick(): void;

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
      <div className='btn' style={this.state.style}>
        <i className={this.getIconFaName()} />
      </div>
      {this.state.activate && this.getContext()}
    </>
  );
}
