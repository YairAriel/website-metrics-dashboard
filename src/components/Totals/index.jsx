/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPercent } from '@fortawesome/free-solid-svg-icons';

import Total from './Total';
import styles from './Totals.module.scss';

const Totals = () => (
  <div className={styles.totals}>
    <Total
      type="cost"
      icon={
        <span className={`${styles.icon} ${styles.azure}`}>
          <FontAwesomeIcon icon={faDollarSign} />
        </span>
      }
    />
    <Total
      type="conversionRate"
      average
      icon={
        <span className={`${styles.icon} ${styles.orange}`}>
          <FontAwesomeIcon icon={faPercent} />
        </span>
      }
    />
  </div>
);

export default Totals;
