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

import { CHART_WIDTH, CHART_HEIGHT, CHART_ANIMATION_DURATION, CHART_ANIMATION_BEGIN } from '../../../constants';
import { getCostPerConversionData, getAverageByAttr } from '../../../dataUtils';

const CostPerConversionChart = ({ daysRange }) => {
  const costPerConversionData = getCostPerConversionData(daysRange);
  const costPerConversionAvg = getAverageByAttr(costPerConversionData, 'costPerConversion');

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <LineChart width={CHART_WIDTH} height={CHART_HEIGHT} data={costPerConversionData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine y={costPerConversionAvg} label={`Avg. ${costPerConversionAvg}`} stroke="red" />
      <Line
        type="monotone"
        dataKey="costPerConversion"
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

CostPerConversionChart.propTypes = {
  daysRange: PropTypes.number.isRequired,
};

export default CostPerConversionChart;
