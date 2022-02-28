import React from 'react';
import styles from './OrderSummary.module.scss';
import PropTypes from 'prop-types';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = (props) => {
  return (
    <h2 className={styles.component}>
      Total:
      <strong>
        {formatPrice(
          calculateTotal(props.cost, props.options),
        )}
      </strong>
    </h2>
  );
}

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;