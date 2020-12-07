import React, {RefObject} from "react";
import {Button} from "./Button";


interface IntroMenuProps {
    onSubmit: (width:number, height:number) => void,
}
interface IntroMenuState {

}
export class IntroMenu extends React.Component<IntroMenuProps, IntroMenuState> {

    wideRef: RefObject<HTMLInputElement>;
    highRef: RefObject<HTMLInputElement>;

    constructor(props) {
        super(props);

        this.wideRef = React.createRef();
        this.highRef = React.createRef();
    }

    render() {
        return <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <div style={{
                width: '400px',
                height: '300px',
                border: '1px solid black',
                borderRadius: '20px',
                background: 'hsl(195, 53%, 85%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '50px',
                }}>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingBottom: '15px',
                        alignItems: 'baseline',
                    }}>
                        <input type="number" style={{
                            width: '30px',
                            fontSize: '25px',
                            fontFamily: 'helvetica',
                            textAlign: 'center',
                        }} ref={this.wideRef}/>
                        <span style={{
                            paddingLeft: '15px',
                            fontSize: '25px',
                            fontFamily: 'helvetica',
                        }}>Cells Wide</span>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                    }}>
                        <input type="number" style={{
                            width: '30px',
                            fontSize: '25px',
                            fontFamily: 'helvetica',
                            textAlign: 'center',
                        }} ref={this.highRef}/>
                        <span style={{
                            paddingLeft: '15px',
                            paddingRight: '6px',
                            fontSize: '25px',
                            fontFamily: 'helvetica',
                        }}>Cells High</span>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Button onClick={() => this.props.onSubmit(Number.parseInt(this.wideRef.current.value), Number.parseInt(this.highRef.current.value))} primaryColor={'black'} secondaryColor={'hsl(105, 53%, 85%)'} style={{marginTop: '40px'}}>Begin</Button>
                    </div>

                </div>
            </div>
        </div>
    }
}