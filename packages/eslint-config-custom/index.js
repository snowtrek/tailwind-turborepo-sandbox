module.exports = {
  plugins: ["import", "simple-import-sort", "unused-imports", "prettier"],
  extends: ["next", "turbo"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: ["apps/*/tsconfig.json", "packages/*/tsconfig.json"],
      },
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  rules: {
    // Prettier
    "prettier/prettier": "error",

    // Imports
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",

    // Unused Imports
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "off",

    // React
    "react/jsx-key": "off",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],

    // Next
    "@next/next/no-html-link-for-pages": "off",
  },
};
