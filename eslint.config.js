import jsxa11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: { jsxa11y },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ignores: [
    'node_modules/', // デフォルトで無視されますが、明示的に追加
    'dist/',
    'build/',
    'public/',
    '*.min.js',
    '*.css',
    'coverage/',
  ],
    rules: {
      'jsx-a11y/anchor-is-valid': 'warn',
    },
  },
];
