/** @format */

import PropTypes from 'prop-types';

import styles from './DataCard.module.scss';

const DataCard = ({ backgroundColor, cardTitle, cardIcon, children }) => (
  <div className={`${styles.dataCard} ${styles[backgroundColor]}`}>
    <h4 className={styles.cardTitle}>
      <span>{cardTitle}</span>
      {cardIcon && <span>{cardIcon}</span>}
    </h4>
    {children}
  </div>
);

DataCard.propTypes = {
  backgroundColor: PropTypes.oneOf(['black', 'azure', 'orange']),
  cardTitle: PropTypes.string.isRequired,
  cardIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
};

DataCard.defaultProps = {
  backgroundColor: 'black',
  cardIcon: null,
};

export default DataCard;
