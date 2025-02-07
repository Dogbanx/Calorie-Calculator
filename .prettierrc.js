module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'auto',
  semi: false,
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['decorators-legacy', 'jsx', 'typescript'],
};
