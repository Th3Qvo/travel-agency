import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

const OrderForm = (props) => {
  return (
    <Row>
      <Col xs={12}>
        <OrderSummary cost={props.cost} />
      </Col>
    </Row>
  );
}

OrderForm.propTypes = {
  cost: PropTypes.string,
};

export default OrderForm;