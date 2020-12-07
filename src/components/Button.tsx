import React from "react";


interface ButtonProps {
    onClick ?: () => any,
    primaryColor ?: string,
    secondaryColor ?: string,
    transparent ?: string,
    disabled ?: boolean,
    style ?: object,
}
interface ButtonState {
    hover: boolean,
}
export class Button extends React.Component<ButtonProps, ButtonState>{

    constructor(props) {
        super(props);

        this.state = {
            hover: false,
        }
    }

    render() {
        let enabled = (this.props.disabled !== true);
        let primaryColor = (this.props.primaryColor != null) ? this.props.primaryColor : 'blue';
        let textColor = (this.props.secondaryColor != null) ? this.props.secondaryColor : 'white';
        let secondaryColor = (!this.props.transparent && this.props.secondaryColor != null) ? this.props.secondaryColor : 'rgba(0,0,0,0)';

        return <div
            style={{
                width: '100px',
                height: '50px',
                borderRadius: '5px',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: (this.state.hover) ? '2px solid rgba(0,0,0,0)' : '2px solid ' + primaryColor,
                background: (this.state.hover) ? primaryColor : secondaryColor,
                color: (this.state.hover) ? textColor : primaryColor,
                transition: 'background .2s, border .2s, color .2s',
                fontFamily: 'helvetica',
                cursor: 'pointer',
                ...this.props.style,
            }}
            onMouseOver={() => this.handleMouse(true)}
            onMouseOut={() => this.handleMouse(false)}
            onClick={() => {
                if(enabled && this.props.onClick != null) {
                    this.props.onClick();
                }
            }}>

            {this.props.children}

        </div>
    }

    handleMouse(enter: boolean) {
        this.setState({
            hover: enter,
        });
    }
}