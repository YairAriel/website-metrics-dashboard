/** @format */

import { useTranslation } from 'react-i18next';

import Charts from '../Charts';
import styles from './App.module.scss';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.app}>
      <h1>{t('pageTitle')}</h1>
      <Charts />
    </div>
  );
};

export default App;
