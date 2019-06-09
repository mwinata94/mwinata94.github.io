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
  justifyContent: 'center'
};

export abstract class Menu extends React.Component<IMenuProps, IMenuState>
  implements IMenu {
  abstract getBackground(opacity: number): string;
  abstract getColor(opacity: number): string;
  abstract getIconFaName(): string;
  abstract getContext(): IContext;
  abstract getStyleActivate(): CSSProperties;
  abstract getStyleDeactivate(): CSSProperties;
  abstract getStyleShow(): CSSProperties;
  abstract getStyleHide(): CSSProperties;
  abstract onClick(): void;

  updateStyle = (newStyle: CSSProperties): void =>
    this.setState({
      style: { ...GenericMenuCSS, ...newStyle }
    });

  onMouseEnter = (_: any): void => {
    let newStyle: CSSProperties = { ...this.state.style };
    newStyle.background = this.getBackground(1.0);
    newStyle.color = this.getColor(1.0);
    newStyle.transform = 'scale(1.2)';
    this.updateStyle(newStyle);
  };

  onMouseLeave = (_: any): void => {
    let newStyle: CSSProperties = { ...this.state.style };
    newStyle.background = this.getBackground(0.6);
    newStyle.color = this.getColor(0.6);
    newStyle.transform = 'scale(1.0)';
    this.updateStyle(newStyle);
  };

  activate = (): void => {
    this.updateStyle(this.getStyleActivate());
  };

  deactivate = (): void => {
    this.updateStyle(this.getStyleDeactivate());
  };

  show = (): void => {
    this.updateStyle(this.getStyleShow());
  };

  hide = (): void => {
    this.updateStyle(this.getStyleHide());
  };

  state = {
    activate: false,
    style: this.props.show
      ? { ...GenericMenuCSS, ...this.getStyleShow() }
      : { ...GenericMenuCSS, ...this.getStyleHide() }
  };

  render = () => (
    <>
      <div
        className='btn'
        style={this.state.style}
        onClick={this.onClick}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <i className={this.getIconFaName()} />
      </div>
      {this.state.activate && this.getContext()}
    </>
  );
}
