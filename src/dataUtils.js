/** @format */

import { lightFormat } from 'date-fns';
import { map, pick, takeRight } from 'lodash';

import metrics from './metrics.json';

const formattedData = map(metrics.data, (metric) => ({
  date: lightFormat(new Date(metric.timestamp), 'yyyy-MM-dd'),
  ...pick(metric, ['cost', 'impressions', 'clicks', 'conversions']),
}));

const filteredDataByDaysRange = (daysRange) => {
  if (daysRange === -1 || !daysRange) return formattedData;
  return takeRight(formattedData, daysRange);
}

export const getAverageByAttr = (data, attr) => {
  const sum = data.reduce((acc, metric) => acc + metric[attr], 0);
  return sum / data.length;
}

export const getMetricsData = (daysRange) => filteredDataByDaysRange(daysRange);

export const getConversionRateData = (daysRange) =>
  map(filteredDataByDaysRange(daysRange), (metric) => ({
    date: metric.date,
    conversionRate: ((metric.conversions / metric.clicks) * 100),
  }));

export const getCostPerConversionData = (daysRange) =>
  map(filteredDataByDaysRange(daysRange), (metric) => ({
    date: metric.date,
    costPerConversion: metric.cost / metric.conversions,
  }));
