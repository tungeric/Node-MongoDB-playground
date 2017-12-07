# learn-fullstack-javascript
Learning Fullstack JavaScript Development: MongoDB, Node.js, React.js
https://www.youtube.com/watch?v=2veG35yo7bo&list=PLndrmkbqEI8WrbdSUmxu0mxOB8ohahLrZ

1. run npm init
2. add dependencies:

npm install --save express
npm install --save mongodb
npm install --save react react-dom
npm install --save-dev webpack
npm install --save-dev babel-cli babel-loader babel-preset-es2015 babel-preset-stage-2 babel-preset-react
npm install --save-dev eslint eslint-plugin-react babel-eslint


3. Create some folders

mkdir src
mkdir public
mkdir api
touch api/index.js
touch public/index.js
touch src/index.js
touch server.js
touch config.js

4. Fix package.json scripts to include:
```
    "start": "nodemon --exec babel-node server.js --ignore public/",
    "dev": "webpack -wd",
```

5. add webpack.config.js
```
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
```

6. add .babelrc
```
{
  "presets": ["react", "es2015", "stage-2"]
}
```

7. vi ~/.bash_profile, and inside:
export PATH=$PATH:./node_modules/.bin
