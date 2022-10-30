/** @format */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Totals from '../Totals';
import DaysSelector from '../DaysSelector';
import Charts from '../Charts';
import Summary from '../Summary';
import Details from '../Details';
import styles from './App.module.scss';

const App = () => {
  const { t } = useTranslation();
  const [daysRange, setDaysRange] = useState(7);

  return (
    <div className={styles.app}>
      <h1>{t('pageTitle')}</h1>
      <Totals />
      <DaysSelector daysRange={daysRange} setDaysRange={setDaysRange} />
      <Charts daysRange={daysRange} />
      <Summary daysRange={daysRange} />
      <Details daysRange={daysRange} />
    </div>
  );
};

export default App;
