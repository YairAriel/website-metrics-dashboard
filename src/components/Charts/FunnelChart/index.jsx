/** @format */

import PropTypes from 'prop-types';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { CHART_WIDTH, CHART_HEIGHT, CHART_ANIMATION_DURATION, CHART_ANIMATION_BEGIN } from '../../../settings/constants';
import { getMetricsData } from '../../../dataUtils';

const FunnelChart = ({ daysRange }) => {
  const metricsData = getMetricsData(7);

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <AreaChart width={CHART_WIDTH} height={CHART_HEIGHT} data={metricsData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="conversions"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
        strokeWidth={2}
        animationDuration={CHART_ANIMATION_DURATION}
        animationBegin={CHART_ANIMATION_BEGIN}
      />
      <Area
        type="monotone"
        dataKey="clicks"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
        strokeWidth={2}
        animationDuration={CHART_ANIMATION_DURATION}
        animationBegin={CHART_ANIMATION_BEGIN}
      />
    </AreaChart>
    // </ResponsiveContainer>
  );
};

FunnelChart.propTypes = {
  daysRange: PropTypes.number.isRequired,
};

export default FunnelChart;
