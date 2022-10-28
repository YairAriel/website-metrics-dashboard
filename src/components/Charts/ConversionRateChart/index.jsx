/** @format */

import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Label,
} from 'recharts';
import { useTranslation } from 'react-i18next';

import {
  CHART_WIDTH,
  CHART_HEIGHT,
  CHART_ANIMATION_DURATION,
  CHART_ANIMATION_BEGIN,
} from '../../../settings/constants';
import { getConversionRateData, getAverageByAttr } from '../../../dataUtils';
import DataCard from '../../DataCard';

const ConversionRateChart = ({ daysRange }) => {
  const { t } = useTranslation();
  const conversionRateData = getConversionRateData(daysRange);
  const avgConversionRate = getAverageByAttr(conversionRateData, 'conversionRate');

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <DataCard
      backgroundColor="azure"
      cardTitle={t('Charts.conversionRate', { avg: avgConversionRate })}
    >
      <LineChart
        key={Math.random()}
        width={CHART_WIDTH}
        height={CHART_HEIGHT}
        data={conversionRateData}
        margin={{ right: 30, left: 8 }}
      >
        <XAxis dataKey="date" />
        <Tooltip />
        <ReferenceLine
          y={avgConversionRate}
          label={<Label value={avgConversionRate} position="top" />}
          stroke="#fff"
        />
        <Line
          type="monotone"
          dataKey="conversionRate"
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

ConversionRateChart.propTypes = {
  daysRange: PropTypes.number.isRequired,
};

export default ConversionRateChart;
