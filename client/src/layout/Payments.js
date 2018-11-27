import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

import Button from "../components/UI/Button";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name='Article Credit'
        description='$5 for 5 Article credits'
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <Button color='green'>Purchase Article</Button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
