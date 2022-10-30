/** @format */

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { map } from 'lodash';

import { getSpecificMetricData } from '../../dataUtils';
import DataCard from '../DataCard';
import styles from './Details.module.scss';

const columns = [
  'date',
  'impressions',
  'clicks',
  'conversions',
  'cost',
  'conversionRate',
  'costPerConversion',
];

const Details = ({ daysRange }) => {
  const { t } = useTranslation();
  const detailsData = getSpecificMetricData(daysRange, columns);

  return (
    <div className={styles.details}>
      <DataCard cardTitle={t('Details.title')}>
        <>
          <div className={styles.row}>
            {map(columns, (column) => (
              <span className={`${styles.cell} ${styles.cellHeader}`} key={column}>
                {t(`Details.${column}`)}
              </span>
            ))}
          </div>
          {map(detailsData, (row) => (
            <div key={row.date} className={styles.row}>
              {map(columns, (col) => (
                <span key={`${row.date}-${col}`} className={`${styles.cell} ${styles.cellBody}`}>
                  {row[col]}
                </span>
              ))}
            </div>
          ))}
        </>
      </DataCard>
    </div>
  );
};

Details.propTypes = {
  daysRange: PropTypes.number.isRequired,
};

export default Details;
