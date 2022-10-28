/** @format */

import { lightFormat } from 'date-fns';
import { map, pick, takeRight } from 'lodash';

import metrics from './metrics.json';

const formattedData = map(metrics.data, (metric) => ({
  date: lightFormat(new Date(metric.timestamp), 'MM/dd'),
  ...pick(metric, ['cost', 'impressions', 'clicks', 'conversions']),
}));

const filteredDataByDaysRange = (daysRange) => {
  if (daysRange === -1 || !daysRange) return formattedData;
  return takeRight(formattedData, daysRange);
};

export const getAverageByAttr = (data, attr) => {
  const sum = data.reduce((acc, metric) => acc + metric[attr], 0);
  return Number((sum / data.length).toFixed(2));
};

export const getMetricsData = (daysRange) => filteredDataByDaysRange(daysRange);

export const getConversionRateData = (daysRange) =>
  map(filteredDataByDaysRange(daysRange), (metric) => ({
    date: metric.date,
    conversionRate: Number(((metric.conversions / metric.clicks) * 100).toFixed(2)),
  }));

export const getCostPerConversionData = (daysRange) =>
  map(filteredDataByDaysRange(daysRange), (metric) => ({
    date: metric.date,
    costPerConversion: Number((metric.cost / metric.conversions).toFixed(2)),
  }));
