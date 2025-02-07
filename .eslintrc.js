module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    semi: ['error', 'never'],
    curly: 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './',
      },
    },
  },
}
