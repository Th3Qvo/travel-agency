import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
// import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({ tripCost, options, setOrderOption }) => {
  return (
    <Row>
      {pricing.map((option) => (
        <Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
        </Col>
      ))}
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