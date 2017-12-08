import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// const color = Math.random() > 0.5 ? 'green' : 'red';
import data from './testData';
// console.log(data);

ReactDOM.render(
  // <h2 className="text-center">
  //   Hello React with JSX! { Math.random() }
  // </h2>,
  <App contests={ data.contests }/>,
  document.getElementById('root')
);

// to test willUnmount
// setTimeout(() => {
//   ReactDOM.render(
//     <h2>Hi</h2>,
//     document.getElementById('root')
//   );
// }, 3000)