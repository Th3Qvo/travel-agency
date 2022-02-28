import React from 'react';
import styles from './OrderSummary.module.scss';
import PropTypes from 'prop-types';

const OrderSummary = (props) => {
  return (
    <h2 className={styles.component}>
      Total:
      <strong>
        {(props.cost)}
      </strong>
    </h2>
  );
}

OrderSummary.propTypes = {
  cost: PropTypes.string,
};

export default OrderSummary;