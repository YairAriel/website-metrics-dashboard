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
import styles from './ConversionRateChart.module.scss';

import {
  CHART_ANIMATION_DURATION,
  CHART_ANIMATION_BEGIN,
} from '../../../settings/constants';
import { getConversionRateData, getAverageByAttribute } from '../../../dataUtils';
import DataCard from '../../DataCard';

const ConversionRateChart = ({ daysRange }) => {
  const { t } = useTranslation();
  const conversionRateData = getConversionRateData(daysRange);
  const avgConversionRate = getAverageByAttribute('conversionRate', conversionRateData);

  return (
    <DataCard
      backgroundColor="azure"
      cardTitle={t('Charts.conversionRate', { avg: avgConversionRate })}
    >
      <div className={styles.chartContainer}>
        <ResponsiveContainer>
          <LineChart
            key={Math.random()}
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
        </ResponsiveContainer>
      </div>
    </DataCard>
  );
};

ConversionRateChart.propTypes = {
  daysRange: PropTypes.number.isRequired,
};

export default ConversionRateChart;
