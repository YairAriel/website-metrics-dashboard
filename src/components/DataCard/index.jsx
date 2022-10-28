/** @format */

import PropTypes from 'prop-types';

import styles from './DataCard.module.scss';

const DataCard = ({ backgroundColor, cardTitle, children }) => (
  <div className={`${styles.dataCard} ${styles[backgroundColor]}`}>
    <h4 className={styles.cardTitle}>{cardTitle}</h4>
    {children}
  </div>
);

DataCard.propTypes = {
  backgroundColor: PropTypes.oneOf(['black', 'azure', 'orange']),
  cardTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

DataCard.defaultProps = {
  backgroundColor: 'black',
}

export default DataCard;
