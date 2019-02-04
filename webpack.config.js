// node module that let's us do file system stuffs...
const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Extract style.css for both editor and frontend styles.
const blocksCSSPlugin = new ExtractTextPlugin({
  filename: "./block.style.build.css"
});

// Extract editor.css for editor styles.
const editBlocksCSSPlugin = new ExtractTextPlugin({
  filename: "./block.editor.build.css"
});

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP === "true";

const devPlugins = [blocksCSSPlugin, editBlocksCSSPlugin];

const prodPlugins = [blocksCSSPlugin, editBlocksCSSPlugin];

// Configuration for the ExtractTextPlugin — DRY rule.
const extractConfig = {
  use: [
    // "postcss" loader applies autoprefixer to our CSS.
    { loader: "raw-loader" },
    {
      loader: "postcss-loader",
      options: {
        ident: "postcss",
        plugins: [
          autoprefixer({
            browsers: [
              ">1%",
              "last 4 versions",
              "Firefox ESR",
              "not ie < 9" // React doesn't support IE8 anyway
            ],
            flexbox: "no-2009"
          })
        ]
      }
    },
    // "sass" loader converts SCSS to CSS.
    {
      loader: "sass-loader",
      options: {
        outputStyle: "production" === process.env.MODE ? "compressed" : "nested"
      }
    }
  ]
};

// Webpack expects an exported object with all the configurations, so we export an object here
module.exports = {
  entry: {
    "./blocks.build": path.resolve("src/index.js") // 'name' : 'path/file.ext'.
  },
  mode: process.env.MODE,
  output: {
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // where we want our built file to go to and be named
    // I name it index.build.js so I keep index files separate
    filename: "block.build.js",
    // we're going to put our built file in a './build/' folder
    path: path.resolve(__dirname, "build")
  },
  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        // basically tells webpack to use babel with the correct presets
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /style\.s?css$/,
        exclude: /(node_modules|bower_components)/,
        use: blocksCSSPlugin.extract(extractConfig)
      },
      {
        test: /editor\.s?css$/,
        exclude: /(node_modules|bower_components)/,
        use: editBlocksCSSPlugin.extract(extractConfig)
      },
      {
        test: /mwm_estilos_inspector\.s?css$/,
        exclude: /(node_modules|bower_components)/,
        use: blocksCSSPlugin.extract(extractConfig)
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

    ]
  },
  // Webpack yells at you if you don't choose a mode...
  mode: "development",
  plugins: "production" === process.env.MODE ? prodPlugins : devPlugins,
  node: {
    fs: "empty"
  }
};
