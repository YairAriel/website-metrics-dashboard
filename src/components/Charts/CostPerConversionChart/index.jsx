/** @format */

import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, Tooltip, ReferenceLine, Label, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

import {
  CHART_WIDTH,
  CHART_HEIGHT,
  CHART_ANIMATION_DURATION,
  CHART_ANIMATION_BEGIN,
} from '../../../settings/constants';
import { getCostPerConversionData, getAverageByAttr } from '../../../dataUtils';
import DataCard from '../../DataCard';

const CostPerConversionChart = ({ daysRange }) => {
  const { t } = useTranslation();
  const costPerConversionData = getCostPerConversionData(daysRange);
  const avgCostPerConversion = getAverageByAttr(costPerConversionData, 'costPerConversion');

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <DataCard backgroundColor="orange" cardTitle={t('Charts.costPerConversion', { avg: avgCostPerConversion })}>
      <LineChart
        key={Math.random()}
        width={CHART_WIDTH}
        height={CHART_HEIGHT}
        data={costPerConversionData}
        margin={{ right: 30, left: 8 }}
      >
        <XAxis dataKey="date" />
        <Tooltip />
        <ReferenceLine
          y={avgCostPerConversion}
          label={<Label value={avgCostPerConversion} position="insideTopLeft" />}
          stroke="#fff"
        />
        <Line
          type="monotone"
          dataKey="costPerConversion"
          stroke="#767e89"
          strokeWidth={5}
          animationDuration={CHART_ANIMATION_DURATION}
          animationBegin={CHART_ANIMATION_BEGIN}
        />
      </LineChart>
    </DataCard>
    // </ResponsiveContainer>
  );
};

CostPerConversionChart.propTypes = {
  daysRange: PropTypes.number.isRequired,
};

export default CostPerConversionChart;
