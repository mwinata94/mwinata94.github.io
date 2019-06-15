import React from 'react';

export const listContext: import('./IContext').IContext = (
  additionalClassNames: string
): JSX.Element => (
  <div className={`card context ${additionalClassNames}`}>
    <header className='card-header'>
      <p className='card-header-title'>Latest Crafts:</p>
    </header>
    <div className='card-content'>
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
  </div>
);
