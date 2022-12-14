/** @format */

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { CHART_ANIMATION_DURATION, CHART_ANIMATION_BEGIN } from '../../../settings/constants';
import { getMetricsData } from '../../../dataUtils';
import DataCard from '../../DataCard';
import styles from './FunnelChart.module.scss';

const FunnelChart = ({ daysRange }) => {
  const { t } = useTranslation();
  const metricsData = getMetricsData(daysRange);

  return (
    <DataCard cardTitle={t('Charts.funnel')}>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%">
          <AreaChart key={Math.random()} data={metricsData} margin={{ right: 30 }}>
            <CartesianGrid vertical={false} />
            <XAxis tick={{ fill: '#767e89' }} tickLine={{ stroke: '#767e89' }} dataKey="date" />
            <YAxis tick={{ fill: '#767e89' }} tickLine={{ stroke: '#767e89' }} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="conversions"
              stackId="1"
              stroke="#fb9678"
              fill="#fb9678"
              strokeWidth={3}
              animationDuration={CHART_ANIMATION_DURATION}
              animationBegin={CHART_ANIMATION_BEGIN}
            />
            <Area
              type="monotone"
              dataKey="clicks"
              stackId="1"
              stroke="#03c9d7"
              fill="#03c9d7"
              strokeWidth={3}
              animationDuration={CHART_ANIMATION_DURATION}
              animationBegin={CHART_ANIMATION_BEGIN}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </DataCard>
  );
};

FunnelChart.propTypes = {
  daysRange: PropTypes.number.isRequired,
};

export default FunnelChart;
