import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
    <div>
      <ul className="list-of-items">
        <li className="item-1">Item 1</li>
        <li className="item-2">Item 2</li>
        <li className="item-3">Item 3</li>
      </ul>
    </div>
    );
  }
}

render(<App />, document.getElementById('app')