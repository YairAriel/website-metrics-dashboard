/** @format */

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { map, sumBy } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMouse, faUserPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons';

import { getMetricsData } from '../../dataUtils';
import DataCard from '../DataCard';
import styles from './Summary.module.scss';

const summaryData = [
  { key: 'impressions', icon: faEye },
  { key: 'clicks', icon: faMouse },
  { key: 'conversions', icon: faUserPlus },
  { key: 'cost', icon: faDollarSign },
];

const Summary = ({ daysRange }) => {
  const { t } = useTranslation();
  const metricsData = getMetricsData(daysRange);

  return (
    <div className={styles.summary}>
      {map(summaryData, ({ key, icon }) => (
        <DataCard key={key} cardTitle={t(`Summary.${key}`)} cardIcon={<FontAwesomeIcon icon={icon} />}>
          <div className={styles.summaryValue}>{sumBy(metricsData, key).toLocaleString()}</div>
        </DataCard>
      ))}
    </div>
  );
};

Summary.propTypes = {
  daysRange: PropTypes.number.isRequired,
}

export default Summary;
