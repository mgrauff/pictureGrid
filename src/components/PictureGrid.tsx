import React from "react";
import {PictureContainer, PictureContainerProps} from "./PictureContainer";

interface PictureGridProps {
    width: number,
    height: number,
}
interface PictureGridState {
    grid: PictureContainerProps[][],
}
export class PictureGrid extends React.Component<PictureGridProps, PictureGridState> {

    headerWidth: number = 50;

    constructor(props) {
        super(props);

        let initGrid: PictureContainerProps[][] = [];

        for(let y = 0; y < this.props.height; y++) {

            initGrid[y] = [];

            for(let x = 0; x < this.props.width; x++) {
                initGrid[y][x] = {
                    id: y * this.props.width + x,
                };
            }
        }

        this.state = {
            grid: initGrid,
        }
    }

    render() {

        let width: number = Math.min((innerWidth - this.headerWidth)/this.props.width, (innerHeight - this.headerWidth)/this.props.height);

        return <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        }}>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>

                <div style={{
                    display: 'flex',
                }}>
                    <div style={{
                        width: this.headerWidth + 'px',
                        height: this.headerWidth + 'px',
                        boxSizing: 'border-box',
                        borderBottom: '1px solid black',
                        borderRight: '1px solid black',
                    }}></div>
                    {this.state.grid[0].map((elem: PictureContainerProps, i) => {
                        return <div style={{
                            width: width + 'px',
                            height: this.headerWidth + 'px',
                            fontSize: '45px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxSizing: 'border-box',
                            borderBottom: '1px solid black',
                            borderRight: '1px solid black',
                        }} key={i}>
                            {i+1}
                        </div>
                    })}
                </div>


                {this.state.grid.map((row: PictureContainerProps[], i) => {
                    return <div style={{
                        display: 'flex',
                    }} key={i}>

                        <div style={{
                            width: this.headerWidth + 'px',
                            height: width + 'px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '45px',
                            boxSizing: 'border-box',
                            borderBottom: '1px solid black',
                            borderRight: '1px solid black',
                        }}>
                            {String.fromCharCode(i + 65)}
                        </div>

                        {row.map((elem: PictureContainerProps) => {

                           return <PictureContainer
                               key={elem.id}
                               id={elem.id}
                               style={{
                                   width: width + 'px',
                                   height: width + 'px',
                                   borderRight: '1px solid black',
                                   borderBottom: '1px solid black',
                               }}
                           />

                        })}
                    </div>
                })}

            </div>
        </div>
    }

}
