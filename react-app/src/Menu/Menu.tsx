import { IContext } from './Context';
import React, { CSSProperties } from 'react';
import { IMenu, IMenuProps, IMenuState } from './IMenu';

const GenericMenuCSS: CSSProperties = {
  position: 'absolute',
  borderRadius: '50%',
  width: '5vw',
  height: '5vw',
  fontSize: '3vw',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background 0.3s, color 0.3s, opacity 0.6s, transform 1s'
};

export abstract class Menu extends React.Component<IMenuProps, IMenuState>
  implements IMenu {
  abstract getIconFaName: () => string;
  abstract getContext: () => IContext;
  abstract setStyleActivate: (props: IMenuProps) => void;
  abstract setStyleDeactivate: (props: IMenuProps) => void;
  abstract setStyleShow: (props: IMenuProps) => void;
  abstract setStyleHide: (props: IMenuProps) => void;
  abstract onClick: () => void;

  getBackground = (): string => {
    return `rgba(${this.state.styleBackground}, ${
      this.state.hover ? 1.0 : 0.6
    })`;
  };

  getColor = (): string => {
    return `rgba(255, 255, 255, ${this.state.hover ? 1.0 : 0.6})`;
  };

  getTransform = (_: IMenuProps): string =>
    this.state.hover ? 'scale(1.2)' : 'scale(1.0)';

  updateStyle = (newStyle: CSSProperties): void =>
    this.setState({
      style: { ...GenericMenuCSS, ...newStyle }
    });

  onMouseEvent = (): void => {
    let newStyle: CSSProperties = { ...this.state.style };
    newStyle.background = this.getBackground();
    newStyle.color = this.getColor();
    newStyle.transform = this.getTransform(this.props);
    newStyle.transition = `background 0.3s, color 0.3s, opacity 0.6s, transform ${
      this.state.hover ? 0.3 : 1
    }s`;
    this.updateStyle(newStyle);
  };

  activate = (): void => {
    this.setState({ activate: true }, () => this.setStyleActivate(this.props));
  };

  deactivate = (): void => {
    this.setState({ activate: false }, () =>
      this.setStyleDeactivate(this.props)
    );
  };

  show = (): void => {
    this.setStyleShow(this.props);
  };

  hide = (): void => {
    this.setStyleHide(this.props);
  };

  state = {
    activate: false,
    hover: false,
    style: {},
    styleBackground: '255,255,255'
  };

  componentDidMount = () => {
    this.props.show ? this.show() : this.hide();
  };

  render = () => (
    <>
      {
        <>
          <div
            className='btn'
            style={this.state.style}
            onClick={this.onClick}
            onMouseEnter={_ =>
              this.setState({ hover: true }, this.onMouseEvent)
            }
            onMouseLeave={_ =>
              this.setState({ hover: false }, this.onMouseEvent)
            }
          >
            <i className={this.getIconFaName()} />
          </div>
          {this.state.activate && this.getContext()()}
        </>
      }
    </>
  );
}
