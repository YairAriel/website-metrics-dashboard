/** @format */

import { lightFormat } from 'date-fns';
import { map, pick, takeRight } from 'lodash';

import metrics from './metrics.json';

const normalizedNumber = (num) => Number(num.toLocaleString());


const formattedData = map(metrics.data, (metric) => ({
  date: lightFormat(new Date(metric.timestamp), 'MM/dd'),
  conversionRate: normalizedNumber(((metric.conversions / metric.clicks) * 100)),
  ...pick(metric, ['cost', 'impressions', 'clicks', 'conversions']),
}));

export const formatPercent = (value) => `${value} %`;

export const formatDollar = (value) => `$ ${value}`;

export const getTotalByAttribute = (attribute) => 
  formattedData.reduce((acc, metric) => acc + metric[attribute], 0).toLocaleString();

export const getAverageByAttribute = (attribute, data) => {
  const targetData = data || formattedData;
  const sum = targetData.reduce((acc, metric) => acc + metric[attribute], 0);
  return normalizedNumber((sum / targetData.length));
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
    costPerConversion: normalizedNumber((metric.cost / metric.conversions)),
  }));
