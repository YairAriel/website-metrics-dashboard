/** @format */

import Charts from '../Charts';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <h1>Website Metrics Dashboard</h1>
    <div>
      <Charts />
    </div>
  </div>
);

export default App;
