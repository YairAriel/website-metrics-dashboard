/** @format */

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPercent } from '@fortawesome/free-solid-svg-icons';

import {
  formatDollar,
  formatPercent,
  getTotalByAttribute,
  getAverageByAttribute,
} from '../../dataUtils';
import DataCard from '../DataCard';
import styles from './Totals.module.scss';

const Totals = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.totals}>
      <DataCard
        cardTitle={t('Totals.cost')}
        cardIcon={
          <span className={`${styles.icon} ${styles.azure}`}>
            <FontAwesomeIcon icon={faDollarSign} />
          </span>
        }
      >
        <div className={styles.totalValue}>{formatDollar(getTotalByAttribute('cost'))}</div>
      </DataCard>
      <DataCard
        cardTitle={t('Totals.conversionRate')}
        cardIcon={
          <span className={`${styles.icon} ${styles.orange}`}>
            <FontAwesomeIcon icon={faPercent} />
          </span>
        }
      >
        <div className={styles.totalValue}>
          {formatPercent(getAverageByAttribute('conversionRate'))}
        </div>
      </DataCard>
    </div>
  );
};

export default Totals;
