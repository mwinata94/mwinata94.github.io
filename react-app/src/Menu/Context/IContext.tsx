import 'react';

export interface IContext {
  (additionalClassNames: string): JSX.Element;
}
