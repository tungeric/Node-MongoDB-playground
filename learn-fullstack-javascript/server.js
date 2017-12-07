// import config, { nodeEnv } from './config';
// console.log(config);
// console.log(nodeEnv);

// // You can use http to directly ping a url and return data
// // now run `babel-node server.js` in terminal
// import https from 'https';
// https.get('https://www.cnn.com/', res => {
//   console.log('Response status code: ', res.statusCode);

//   res.on('data', chunk => {
//     console.log(chunk.toString());
//   });
// });

// // Create a server with pure http and use it to do basic things in terminal
// import http from 'http';
// const server = http.createServer();
// server.listen(8080);

// server.on('request', (req, res) => {
//   res.write('Hello HTTP!\n');
//   setTimeout(() => {
//     res.write('I can stream!\n');
//     res.end();
//   }, 3000);
// });
// // now run `npm start` which runs `babel-node server.js`
// // then in another terminal window run `curl http://localhost:8080/`

// Use express!
import config from './config';
import express from 'express';
const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express');
});

server.get('/about.html', (req, res) => {
  res.send('The about page');
});

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});

// now run `npm start` which runs `babel-node server.js`
// then in another terminal window run `curl http://localhost:8080/` and add whatever route
