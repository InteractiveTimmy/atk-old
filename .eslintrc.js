module.exports = {
  "extends": "airbnb",
  "rules": {
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"]
  },
  "env": {
    "browser": true,
    "node": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ],
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    }
  }
};