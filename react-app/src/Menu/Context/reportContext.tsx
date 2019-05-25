export const reportContext: import('./IContext').IContext = (): JSX.Element => (
  <div id='reportContext'>
    <span className='titleContext text'>Bug Report</span>
    <br />
    <br />
    <span className='text'>
      If you found any bug, please report to{' '}
      <a href='mailto:mwinata@mail.sfsu.edu'>mwinata@mail.sfsu.edu</a>
    </span>
  </div>
);
