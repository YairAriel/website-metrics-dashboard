/** @format */

import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

import {
  CHART_WIDTH,
  CHART_HEIGHT,
  CHART_ANIMATION_DURATION,
  CHART_ANIMATION_BEGIN,
} from '../../../settings/constants';
import { getConversionRateData, getAverageByAttr } from '../../../dataUtils';

const ConversionRateChart = ({ daysRange }) => {
  const conversionRateData = getConversionRateData(daysRange);
  const conversionRateAvg = getAverageByAttr(conversionRateData, 'conversionRate');

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      data={conversionRateData}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine y={conversionRateAvg} label={`Avg. ${conversionRateAvg}`} stroke="red" />
      <Line
        type="monotone"
        dataKey="conversionRate"
        stroke="#8884d8"
        activeDot={{ r: 5 }}
        strokeWidth={2}
        animationDuration={CHART_ANIMATION_DURATION}
        animationBegin={CHART_ANIMATION_BEGIN}
      />
    </LineChart>
    // </ResponsiveContainer>
  );
};

ConversionRateChart.propTypes = {
  daysRange: PropTypes.number.isRequired,
};

export default ConversionRateChart;
