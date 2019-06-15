import React from 'react';

export const bugContext: import('./IContext').IContext = (
  additionalClassNames: string
): JSX.Element => (
  <div className={`card context ${additionalClassNames}`}>
    <header className='card-header'>
      <p className='card-header-title'>Bug Report</p>
    </header>
    <div className='card-content'>
      If you found any bug, please report to{' '}
      <a href='mailto:mwinata@mail.sfsu.edu'>mwinata@mail.sfsu.edu</a>
    </div>
  </div>
);
