module.exports = {
  // Run ESLint on staged JavaScript/TypeScript files
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  // Run Prettier on other file types
  '*.{json,md,yml,yaml}': ['prettier --write'],
};
