// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require("eslint-config-expo/flat");

 module.exports = {
   extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native"],
   rules: {
     "prettier/prettier": "error",
    "react-native/no-unused-styles": "error",
   },
 };
;
