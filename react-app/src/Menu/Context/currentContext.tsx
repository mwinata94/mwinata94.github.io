import React from 'react';
import { IContext } from './IContext';

export const currentContext: IContext = (): JSX.Element => (
  <div id='currentContext'>
    <span className='titleContext text'>Current</span>
    <br />
    <br />
    <span className='text'>Latest Crafts:</span>
    <br />
    <span className='text'>
      <a href='https://mwinata94.github.io/tools/commentConversion/index.html'>
        Comment Conversion
      </a>
    </span>
    <br />
    <span className='text'>
      <a href='https://mwinata94.github.io/tools/colorTransform/index.html'>
        Color Transform
      </a>
    </span>
  </div>
);
