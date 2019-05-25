import React from 'react';
import { IContext } from './IContext';

export const aboutContext: IContext = (): JSX.Element => (
  <div id='aboutContext'>
    <span className='titleContext text'>About</span>
    <br />
    <br />
    <span className='text'>
      Hi, welcome to my website. My name's Michael Winata, and I'm a Computer
      Science student at San Francisco State University. Feel free to browse my
      craft.
    </span>
  </div>
);
