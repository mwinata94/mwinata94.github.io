import React from 'react';

export const listContext: import('./IContext').IContext = (
  additionalClassNames: string
): JSX.Element => (
  <div className={`card context ${additionalClassNames}`}>
    <header className='card-header'>
      <p className='card-header-title'>Latest Crafts:</p>
    </header>
    <div className='card-content'>
      <div className='box'>
        <div className='columns'>
          <div className='column'>
            <p className='is-size-4'>Comment Conversion</p>
            <p>Convert text into a comment block</p>
          </div>
          <div className='column is-narrow flex-center-content'>
            <a
              className='button is-large is-primary'
              href='https://mwinata94.github.io/tools/commentConversion/'
            >
              Open
            </a>
          </div>
        </div>
      </div>
      <div className='box'>
        <div className='columns'>
          <div className='column'>
            <p className='is-size-4'>Color Transform</p>
            <p>
              Cycle element's color between color a and color b at x interval
            </p>
          </div>
          <div className='column is-narrow flex-center-content'>
            <a
              className='button is-large is-primary'
              href='https://mwinata94.github.io/tools/colorTransform/'
            >
              Open
            </a>
          </div>
        </div>
      </div>
      <div className='box'>
        <div className='columns'>
          <div className='column'>
            <p className='is-size-4'>LitLister</p>
            <p>e-commerce web application</p>
          </div>
          <div className='column is-narrow flex-center-content'>
            <a
              className='button is-large is-primary'
              href='https://litlister.com'
            >
              Open
            </a>
          </div>
        </div>
      </div>
      <div className='box'>
        <div className='columns'>
          <div className='column'>
            <p className='is-size-4'>Dealiooo</p>
            <p>monopoly deal simulator</p>
          </div>
          <div className='column is-narrow flex-center-content'>
            <a
              className='button is-large is-primary'
              href='https://dealiooo.herokuapp.com/'
            >
              Open
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
