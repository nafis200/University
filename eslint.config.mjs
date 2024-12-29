import globals from "globals";
import jsPlugin from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest", 
        sourceType: "module",  
      },
      globals: {
        ...globals.browser,
        process: "readonly", // Include `process` as a global variable
      },
    },
    rules: {
      "no-unused-vars": "error",        // Disallow unused variables
      "no-unused-expressions": "error", // Disallow unused expressions
      "prefer-const": "error",          // Enforce `const` for immutable variables
      "no-console": "warn",             // Warn for `console` usage
      "no-undef": "error",              // Disallow undefined variables
    },
  },
  // JavaScript-specific configuration
  jsPlugin.configs.recommended,
  // TypeScript-specific configuration
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // Include recommended TypeScript rules
    },
  },
  // Ignore specific directories
  {
    ignores: ["node_modules", "dist"],
  },
];