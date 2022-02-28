import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
// import PropTypes from 'prop-types';

const OrderForm = ({ tripCost, options }) => {
  console.log(tripCost, options);
  return (
    <Row>
      <Col xs={12}>
        <OrderSummary options={options} cost={tripCost} />
      </Col>
    </Row>
  );
}

// OrderForm.propTypes = {
//   cost: PropTypes.string,
//   options: PropTypes.object,
// };

export default OrderForm;