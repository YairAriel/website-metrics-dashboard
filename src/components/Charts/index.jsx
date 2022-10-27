/** @format */

import ConversionRateChart from './ConversionRateChart';
import FunnelChart from './FunnelChart';
import CostPerConversionChart from './CostPerConversionChart';
import styles from './Charts.module.scss';

const Charts = () => (
  <div className={styles.chartsContainer}>
    <FunnelChart daysRange={7} />
    <ConversionRateChart daysRange={7} />
    <CostPerConversionChart daysRange={7} />
  </div>
);

export default Charts;