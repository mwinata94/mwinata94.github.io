import React from 'react';

export const informationContext: import('./IContext').IContext = (
  additionalClassNames: string
): JSX.Element => (
  <div className={`card context ${additionalClassNames}`}>
    <header className='card-header'>
      <p className='card-header-title'>About</p>
    </header>
    <div className='card-content'>
      Hi, welcome to my website. My name's Michael Winata, and I'm a Computer
      Science graduate. Feel free to browse my craft.
    </div>
  </div>
);
