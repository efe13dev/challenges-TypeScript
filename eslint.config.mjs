import love from 'eslint-config-love';

export default [
  {
    ...love,
    files: ['**/*.ts']
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigDirName: import.meta.dirname
      }
    }
  },
  {
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off'
      //'no-console': 'warn'
    }
  }
];
