import React from 'react';

export const aboutContext: import('./IContext').IContext = (): JSX.Element => (
  <div id='aboutContext'>
    <span className='titleContext text'>About</span>
    <br />
    <br />
    <span className='text'>
      Hi, welcome to my website. My name's Michael Winata, and I'm a Computer
      Science graduate. Feel free to browse my craft.
    </span>
  </div>
);
