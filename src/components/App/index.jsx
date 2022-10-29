/** @format */

import { useTranslation } from 'react-i18next';

import Totals from '../Totals';
import Charts from '../Charts';
import Summary from '../Summary';
import styles from './App.module.scss';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.app}>
      <h1>{t('pageTitle')}</h1>
      <Totals />
      <Charts />
      <Summary />
    </div>
  );
};

export default App;
