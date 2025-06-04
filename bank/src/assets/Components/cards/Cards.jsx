import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: 'white'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onCardClick(this.props.buttonText);

    this.setState({ backgroundColor: 'orange' });
  }

  render() {
    return (
      <Card className="mb-4" style={{ backgroundColor: this.state.backgroundColor }}>
        <Card.Header as="h4">{this.props.plan}</Card.Header>
        <Card.Body>
          <Card.Title as="h2">{this.props.price}</Card.Title>
          <Card.Text>{this.props.features}</Card.Text>
          <Button variant="primary" onClick={this.handleClick}>
            {this.props.buttonText}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Cards;

