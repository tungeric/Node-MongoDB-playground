import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component { // can access in React dev tools with `$r`
  // constructor() {
  //   super();
  //   this.state = { test: 42 }
  // }
  state= { 
    pageHeader: 'Naming Contests',
    test: 76 
  }

  // componentDidMount() {
  //   console.log('did Mount');
  // }

  // componentWillUnmount() {
  //   console.log('will Unmount');
  // }

  render() {
    return(
      <div className="App">
        <Header message={ this.state.pageHeader } />
        <div>
          <ContestPreview { ...this.props.contests[0] } />
        </div>
      </div>
    );
  }
};

export default App;