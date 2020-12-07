import React from 'react';
import ReactDOM from 'react-dom';
import {PictureGrid} from "./components/PictureGrid";
import {IntroMenu} from "./components/IntroMenu";

ReactDOM.render(<IntroMenu onSubmit={(w, h) => onSubmit(w, h)}/>, document.getElementById('root'));


function onSubmit(w, h) {
    let width: number = Math.min(Math.max(1, w), 10);
    let height: number = Math.min(Math.max(1, h), 10);

    ReactDOM.render(<PictureGrid width={width} height={height}/>, document.getElementById('root'));
}