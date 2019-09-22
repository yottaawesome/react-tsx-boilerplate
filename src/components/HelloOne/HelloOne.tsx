import * as React from 'react';
import * as styles from './styles.module.scss';

export interface HelloProps { }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class HelloOne extends React.Component<HelloProps, {}> {
    render() {
        return <h1 className={styles.root}>Hello from React!!</h1>;
    }
}
