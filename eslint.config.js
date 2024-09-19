const config =
  {
    rules:
      {
        eqeqeq:
          'error',
        'no-unused-vars':
          'error',
      },
    env: {
      node: true,
      es6: true,
    },
    extends:
      'eslint:recommended',
  };

module.exports =
  config;
