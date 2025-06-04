import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class Home extends Component {
  constructor() {
    super();

    this.state = {
      isHeading: true,
    };
  }

  render() {
    const { price } = this.props;

    return (
      <div>
        <Container className="text-center my-4">
          <Row className="align-items-center">
            <Col>
              {this.state.isHeading ? (
                <>
                  <h1 className="display-1" id="heading">
                    {price ? `Price: ${price}` : 'Pricing'}
                  </h1>
                  <p id="pricing">
                    Quickly build an effective pricing table for your potential customers with <br />
                    this Bootstrap example. It’s built with default Bootstrap components and <br />
                    utilities with little customization.
                  </p>
                </>
              ) : (
                <p className="text-muted">Pricing information is not available</p>
              )}
            </Col>
          </Row>
          <br /><br /><br />
        </Container>
      </div>
    );
  }
}

export default Home;
