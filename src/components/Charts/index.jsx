/** @format */

import ConversionRateChart from './ConversionRateChart';
import FunnelChart from './FunnelChart';
import CostPerConversionChart from './CostPerConversionChart';

const Charts = () => (
  <div>
    <ConversionRateChart daysRange={7} />
    <FunnelChart daysRange={7} />
    <CostPerConversionChart daysRange={7} />
  </div>
);

export default Charts;
