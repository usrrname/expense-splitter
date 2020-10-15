import { Col, Row } from 'react-bootstrap';
import React, { FormEvent } from 'react';

import { ItemState } from '../types/types';

type Props = {
  itemState: ItemState,
  onBlur?: (event: FormEvent) => void,
}

const Total = ({ itemState, onBlur }: Props) => {

  return (
    <Row className="justify-content-end">
      <Col className="col-lg-6 col-md-12 col-sm-12">
      <label>Total </label><span onBlur={onBlur}>$ {itemState.total}</span>
      </Col>
    </Row>
  )
}

export default Total;