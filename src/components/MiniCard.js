import React, { Component } from 'react'

export default class MiniCard extends Component {
  render() {
      const {cardDetails} = this.props;
    return (
      <React.Fragment>
          <div>{cardDetails.title}</div>
      </React.Fragment>
    )
  }
}
