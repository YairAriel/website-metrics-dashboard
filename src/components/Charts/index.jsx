/** @format */

import PropTypes from 'prop-types';

import ConversionRateChart from './ConversionRateChart';
import FunnelChart from './FunnelChart';
import CostPerConversionChart from './CostPerConversionChart';
import styles from './Charts.module.scss';

const Charts = ({ daysRange }) => (
  <div className={styles.chartsContainer}>
    <FunnelChart daysRange={daysRange} />
    <div>
      <ConversionRateChart daysRange={daysRange} />
      <CostPerConversionChart daysRange={daysRange} />
    </div>
  </div>
);

Charts.propTypes = {
  daysRange: PropTypes.number.isRequired,
};

export default Charts;
