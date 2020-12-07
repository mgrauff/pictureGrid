import React from 'react';
import ReactDOM from 'react-dom';
import {PictureGrid} from "./components/PictureGrid";
import {IntroMenu} from "./components/IntroMenu";

ReactDOM.render(<IntroMenu onSubmit={(w, h) => onSubmit(w, h)}/>, document.getElementById('root'));


function onSubmit(w, h) {

    if(isNaN(w) || w == null || typeof w != 'number') {
        w = 0;
    }
    if(isNaN(h) || h == null || typeof h != 'number') {
        h = 0;
    }

    let width: number = Math.min(Math.max(1, w), 10);
    let height: number = Math.min(Math.max(1, h), 10);

    ReactDOM.render(<PictureGrid width={width} height={height}/>, document.getElementById('root'));
}