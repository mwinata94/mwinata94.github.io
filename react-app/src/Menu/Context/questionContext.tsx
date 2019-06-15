import React from 'react';

export const questionContext: import('./IContext').IContext = (
  additionalClassNames: string
): JSX.Element => (
  <div className={`card context ${additionalClassNames}`}>
    <header className='card-header'>
      <p className='card-header-title'>Question</p>
    </header>
    <div className='card-content'>
      Feel free to send any inquiry to{' '}
      <a href='mailto:mwinata@mail.sfsu.edu'>mwinata@mail.sfsu.edu</a>
    </div>
  </div>
);
