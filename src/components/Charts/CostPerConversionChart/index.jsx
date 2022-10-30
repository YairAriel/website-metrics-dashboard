/** @format */

import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { useTranslation } from 'react-i18next';

import { CHART_ANIMATION_DURATION, CHART_ANIMATION_BEGIN } from '../../../settings/constants';
import { getSpecificMetricData, getAverageByAttribute, formatDollar } from '../../../dataUtils';
import DataCard from '../../DataCard';
import styles from '../ConversionRateChart/ConversionRateChart.module.scss';

const CostPerConversionChart = ({ daysRange }) => {
  const { t } = useTranslation();
  const costPerConversionData = getSpecificMetricData(daysRange, ['date', 'costPerConversion']);
  const avgCostPerConversion = getAverageByAttribute('costPerConversion', costPerConversionData);

  return (
    <DataCard
      backgroundColor="orange"
      cardTitle={t('Charts.costPerConversion', { avg: formatDollar(avgCostPerConversion) })}
    >
      <div className={styles.chartContainer}>
        <ResponsiveContainer>
          <LineChart
            key={Math.random()}
            data={costPerConversionData}
            margin={{ right: 30, left: 8 }}
          >
            <XAxis dataKey="date" />
            <Tooltip />
            <ReferenceLine y={avgCostPerConversion} stroke="#fff" />
            <Line
              type="monotone"
              dataKey="costPerConversion"
              stroke="#767e89"
              strokeWidth={5}
              dot={false}
              animationDuration={CHART_ANIMATION_DURATION}
              animationBegin={CHART_ANIMATION_BEGIN}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </DataCard>
  );
};

CostPerConversionChart.propTypes = {
  daysRange: PropTypes.number.isRequired,
};

export default CostPerConversionChart;
