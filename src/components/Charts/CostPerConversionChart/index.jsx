/** @format */

import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ReferenceLine,
  Label,
  ResponsiveContainer,
} from 'recharts';
import { useTranslation } from 'react-i18next';

import { CHART_ANIMATION_DURATION, CHART_ANIMATION_BEGIN } from '../../../settings/constants';
import { getCostPerConversionData, getAverageByAttr } from '../../../dataUtils';
import DataCard from '../../DataCard';
import styles from '../ConversionRateChart/ConversionRateChart.module.scss';

const CostPerConversionChart = ({ daysRange }) => {
  const { t } = useTranslation();
  const costPerConversionData = getCostPerConversionData(daysRange);
  const avgCostPerConversion = getAverageByAttr(costPerConversionData, 'costPerConversion');

  return (
    <DataCard
      backgroundColor="orange"
      cardTitle={t('Charts.costPerConversion', { avg: avgCostPerConversion })}
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
        </ResponsiveContainer>
      </div>
    </DataCard>
  );
};

CostPerConversionChart.propTypes = {
  daysRange: PropTypes.number.isRequired,
};

export default CostPerConversionChart;
