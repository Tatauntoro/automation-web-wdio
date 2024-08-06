export default [
  {
    rules: {
      "indent": ["error", 2],
      "semi": ["error", "always"],
      "semi-spacing": "error",
      "quotes": ["error", "double"],
      "space-infix-ops": "off",
      "no-unused-vars": "off",
      "eol-last": ["error", "always"],
      "no-trailing-spaces": "error",
      "comma-dangle": ["error", "always-multiline"],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "no-multi-spaces": "error",
      "no-tabs": "error",
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
      "key-spacing": ["error", { "mode": "strict" }],
      "keyword-spacing": ["error", { "after": true }],
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    },
  }];
