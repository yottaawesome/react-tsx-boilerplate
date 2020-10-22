import * as React from 'react';
import * as styles from './styles.module.scss';

export class HelloOne extends React.Component {
  render(): JSX.Element {
    return <h1 className={styles.root}>Hello from React!!</h1>;
  }
}
