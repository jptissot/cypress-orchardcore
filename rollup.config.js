import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';

const config = [
    {
        input: './src/index.js',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                globals: {
                    Cypress: 'cypress',
                },
            },
            { file: pkg.module, format: 'es' },
        ],
        plugins: [
            // Compile to commonjs and bundle
            commonjs()
        ],
    },
    {
      input: './src/utils.js',
      output: [
          {
              file: 'utils.js',
              format: 'cjs',
              globals: {
                  Cypress: 'cypress',
              },
          },
          { file: 'utils.mjs', format: 'es' },
      ],
      plugins: [
          // Compile to commonjs and bundle
          commonjs()
      ],
  }
];

module.exports = config;
