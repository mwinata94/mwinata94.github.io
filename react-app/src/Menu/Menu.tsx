import { IContext } from './Context';
import React, { CSSProperties } from 'react';
import { IMenu, IMenuProps, IMenuState } from './IMenu';

const GenericMenuCSS: CSSProperties = {
  borderRadius: '50%',
  width: '1.75em',
  height: '1.75em',
  fontSize: '3em',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background 0.3s, color 0.3s, opacity 0.3s, transform 0.3s'
};

export abstract class Menu extends React.Component<IMenuProps, IMenuState>
  implements IMenu {
  abstract getIconFaName: () => string;
  abstract getContext: () => IContext;
  abstract setStyleActivate: () => void;
  abstract setStyleDeactivate: () => void;
  abstract setStyleShow: () => void;
  abstract setStyleHide: () => void;

  getBackground = (): string => {
    return `rgba(${this.state.styleBackground}, ${
      this.state.hover ? 1.0 : 0.6
    })`;
  };

  getColor = (): string => {
    return `rgba(255, 255, 255, ${this.state.hover ? 1.0 : 0.6})`;
  };

  updateStyle = (newStyle: CSSProperties): void =>
    this.setState({
      style: { ...GenericMenuCSS, ...newStyle }
    });

  onClick = (): void => {
    if (this.state.activate) {
      this.deactivate();
    } else {
      this.activate();
    }
  };

  onMouseEnter = (): void => {
    let newStyle: CSSProperties = { ...this.state.style };
    newStyle.background = this.getBackground();
    newStyle.color = this.getColor();
    newStyle.transform = 'scale(1.2)';
    this.updateStyle(newStyle);
  };

  onMouseLeave = (): void => {
    let newStyle: CSSProperties = { ...this.state.style };
    newStyle.background = this.getBackground();
    newStyle.color = this.getColor();
    newStyle.transform = 'scale(1.0)';
    this.updateStyle(newStyle);
  };

  activate = (): void => {
    this.setState({ activate: true }, this.setStyleActivate);
  };

  deactivate = (): void => {
    this.setState({ activate: false }, this.setStyleDeactivate);
  };

  show = (): void => {
    this.setStyleShow();
  };

  hide = (): void => {
    this.setStyleHide();
  };

  state = {
    activate: false,
    hover: false,
    style: {},
    styleBackground: '255,255,255'
  };

  componentDidMount = () => {
    this.props.show ? this.setStyleShow() : this.setStyleHide();
  };

  render = () => (
    <>
      <div
        className='btn'
        style={this.state.style}
        onClick={this.onClick}
        onMouseEnter={_ => this.setState({ hover: true }, this.onMouseEnter)}
        onMouseLeave={_ => this.setState({ hover: false }, this.onMouseLeave)}
      >
        <i className={this.getIconFaName()} />
      </div>
      {this.state.activate && this.getContext()()}
    </>
  );
}
