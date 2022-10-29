/** @format */

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { find } from 'lodash';

const customStyles = {
  container: (provided) => ({
    ...provided,
    alignSelf: 'flex-start',
    marginLeft: '10px',
    width: '200px',
    '@media (min-width: 768px)': {
      marginLeft: '18px',
    },
  }),
  control: (provided) => ({
    ...provided,
    background: '#767e89',
    borderRadius: '8px',
    padding: '4px 6px',
    boxShadow: 'none',
    alignSelf: 'flex-start',
    border: 0,
    fontSize: '1.2em',
    marginTop: '1em',
    '&:hover': { cursor: 'pointer' },
  }),
  menu: (provided) => ({
    ...provided,
    color: '#fff',
    background: '#767e89',
    display: 'flex',
    boxShadow: 'none',
  }),
  option: (provided,) => ({
    ...provided,
    width: '200px',
    background: 'none',
    '&:hover': { background: '#03c9d7', color: '#363c45', cursor: 'pointer' },
  }),
}

const DaysSelector = ({ daysRange, setDaysRange }) => {
  const { t } = useTranslation(); 
  const options = [
    { value: 7, label: t('DaysSelector.lastWeek') },
    { value: 30, label: t('DaysSelector.lastMonth') },
  ];

  return (
    <Select
      options={options}
      value={find(options, { value: daysRange })}
      onChange={(option) => setDaysRange(option.value)}
      styles={customStyles}
    />
  );
};

DaysSelector.propTypes = {
  daysRange: PropTypes.number.isRequired,
  setDaysRange: PropTypes.func.isRequired,
};

export default DaysSelector;
