/** @format */

import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { getTotalByAttribute, getAverageByAttribute } from '../../../dataUtils';
import DataCard from '../../DataCard';
import styles from './Total.module.scss';

const Total = ({ type, average, icon }) => {
  const { t } = useTranslation();

  return (
    <DataCard cardTitle={t(`Totals.${type}`)} cardIcon={icon}>
      <div className={styles.total}>
        {average ? getAverageByAttribute(type) : getTotalByAttribute(type)}
      </div>
    </DataCard>
  );
};

Total.propTypes = {
  type: PropTypes.string.isRequired,
  average: PropTypes.bool,
  icon: PropTypes.node.isRequired,
};

Total.defaultProps = {
  average: false,
};

export default Total;
