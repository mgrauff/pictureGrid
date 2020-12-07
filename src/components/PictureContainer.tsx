import React, {RefObject} from "react";
import {imgPromise} from "../Images";


export interface PictureContainerProps {
    id: number,
    style ?: Object,
}
interface PictureContainerState {
    hidden: boolean,
    img: string,
}
export class PictureContainer extends React.Component<PictureContainerProps, PictureContainerState> {

    inputRef: RefObject<HTMLInputElement>;

    //not using state to avoid infinite loops (img changes, state updates, values change on image load, state updates
    imgWidth: number = 0;
    imgHeight: number = 0;

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.state = {
            img: null,
            hidden: false,
        }
    }

    render() {
        let content;
        if(this.state.img != null) {
            if(!this.state.hidden) {
                content = <img src={this.state.img} style={{
                    width: (this.imgWidth  < this.imgHeight) ? 'auto' : '100%',
                    height: (this.imgWidth < this.imgHeight) ? '100%' : 'auto',
                }}/>
            }
            else {
                content = <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'lightblue',
                }}></div>
            }
        }
        else {
            content = <span>Upload Image</span>
        }

        return <div style={{
            boxSizing: 'border-box',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            ...this.props.style,
        }} onMouseDown={(clickData) => this.handleClick(clickData)}>

            <input type="file" id={"imgUpload" + this.props.id} ref={this.inputRef} accept="image/*" style={{display: 'none'}} onChange={(event) => this.imageUploaded(event.target.files[0])}/>
            
            {content}

        </div>
    }

    handleClick(clickData) {
        if(clickData.button == 0) {
            if(this.state.img != null) {
                this.setState((state, props) => ({
                    img: state.img,
                    hidden: !state.hidden,
                }));
            }
            else {
                this.inputRef.current.click();
            }
        }
        else if(clickData.button == 2) {
            this.inputRef.current.click();
        }
    }

    imageUploaded(file: File) {

        let reader:FileReader  = new FileReader();

        reader.onload = async (e) =>  {
            let result = e.target.result;
            if(typeof result == 'string') {

                let img = await imgPromise(result);

                this.imgWidth = img.width;
                this.imgHeight = img.height;

                this.setState({
                    img: result,
                    hidden: false,
                });
            }
        }

        reader.readAsDataURL(file);
    }
}