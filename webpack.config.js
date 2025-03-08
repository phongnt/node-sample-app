const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Your main JS file
  output: {
    path: path.resolve(__dirname, 'dist'), // The output folder
    filename: 'bundle.js', // The bundled output file
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Load CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template HTML file
      filename: 'index.html', // Output file name
    }),
  ],
};
// This configuration file tells Webpack to:
//
// Use src/index.js as the entry point.
// Bundle the output to dist/bundle.js.
// Load CSS files.
// Use the src/index.html file as the template.
// Output the HTML file to dist/index.html.
// To run Webpack, use the following command:
//
// npx webpack
// This will bundle your files and output them to the dist folder.
//
// To serve the files, you can use a simple HTTP server like http-server:
//
// npx http-server dist
// This will serve the files on http://localhost:8080.
//
// You can also use the Webpack Dev Server to serve the files:
//
// npx webpack serve
// This will serve the files on http://localhost:8080.
//
// You can also add a start script to your package.json file:
//
// "scripts": {
//   "start": "webpack serve"
// }
// Then you can run the following command:
//
// npm start
// This will start the Webpack Dev Server.
//
// You can now access your app at http://localhost:8080.
//
// Conclusion
// Webpack is a powerful tool for bundling your JavaScript files and assets. In this tutorial, you learned how to set up Webpack to bundle your files and serve them using a simple HTTP server. You also learned how to use plugins like HtmlWebpackPlugin to generate HTML files.
//
// To learn more about Webpack, check out the official documentation. You can also explore more plugins and loaders to enhance your Webpack configuration.
//
// Thanks for reading! 🚀