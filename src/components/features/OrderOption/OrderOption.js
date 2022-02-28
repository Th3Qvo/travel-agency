import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.module.scss';

const OrderOption = (options) => {
  return (
    <div className={styles.component}>
      <h3 className={styles.title}>
        {options.name}
      </h3>
    </div>
  )
}

OrderOption.propTypes = {
  options: PropTypes.object,
};

export default OrderOption;