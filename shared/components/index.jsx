import React from 'react';

export default class AppView extends React.Component {
  render() {
    return (
      <div id="main-view">
        <h1>Todos</h1>

        <hr />

        {this.props.children}
      </div>
    );
  }
}
