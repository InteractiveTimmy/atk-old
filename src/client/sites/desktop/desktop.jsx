import React, { Component } from 'react';

class Desktop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'This is a title',
    };
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        {title}
      </div>
    );
  }
}

export default Desktop;
