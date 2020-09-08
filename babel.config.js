module.exports =  {
  "presets": [
    // Set preset for typescript
    "@babel/preset-typescript",
    // Set preset for react env
    "@babel/preset-react",
    [
      // Preset env for babel w/ options
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3,
        "targets": {
          "browsers": [
            "> 5%",
            "last 1 Chrome version"
          ],
          "node": "current"
        },
        "modules": false,
        "loose": false
      }
    ]
  ],
  "plugins": [
    // For hot reloading dev server and keep state
    "react-hot-loader/babel",
    // Enables use of import
    "@babel/syntax-dynamic-import",
    // Enables use of spread operater
    "@babel/plugin-proposal-object-rest-spread",
    // Enables common js modules
    "@babel/plugin-transform-modules-commonjs",
    [
      // for antd components
      "@babel/plugin-proposal-decorators", 
      { 
        "legacy": true 
      }
    ],
    [
      // Enables use of hoc
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
  ]
}