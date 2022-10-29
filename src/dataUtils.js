/** @format */

import { lightFormat } from 'date-fns';
import { map, pick, takeRight } from 'lodash';

import metrics from './metrics.json';

const formattedData = map(metrics.data, (metric) => ({
  date: lightFormat(new Date(metric.timestamp), 'MM/dd'),
  conversionRate: Number(((metric.conversions / metric.clicks) * 100).toFixed(2)),
  ...pick(metric, ['cost', 'impressions', 'clicks', 'conversions']),
}));

export const getTotalByAttribute = (attribute) =>
  formattedData.reduce((acc, metric) => acc + metric[attribute], 0);

export const getAverageByAttribute = (attribute, data) => {
  const targetData = data || formattedData;
  const sum = targetData.reduce((acc, metric) => acc + metric[attribute], 0);
  return Number((sum / targetData.length).toFixed(2));
};

const filteredDataByDaysRange = (daysRange) => {
  if (daysRange === -1 || !daysRange) return formattedData;
  return takeRight(formattedData, daysRange);
};

export const getMetricsData = (daysRange) => filteredDataByDaysRange(daysRange);

export const getConversionRateData = (daysRange) =>
  map(filteredDataByDaysRange(daysRange), (metric) => ({
    ...pick(metric, ['date', 'conversionRate']),
  }));

export const getCostPerConversionData = (daysRange) =>
  map(filteredDataByDaysRange(daysRange), (metric) => ({
    date: metric.date,
    costPerConversion: Number((metric.cost / metric.conversions).toFixed(2)),
  }));
