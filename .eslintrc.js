module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-console': 'warn',
        semicolon: 'none',
      },
    },
  ],
}
