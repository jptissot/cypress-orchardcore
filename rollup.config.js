import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

const getPlugins = ({ uglify = false } = {}) => {
  const plugins = [
    babel({
      exclude: 'node_modules/**',
    }),
  ]
  return uglify ? [terser(), ...plugins] : plugins
}

export default [{
  input: 'src/index.js',
  plugins: getPlugins({ uglify: true }),
  output: {
    file: 'dist/index.min.js',
    name: 'index',
    format: 'umd',
  }
}, {
  input: 'src/index.js',
  plugins: getPlugins(),
  output: {
    file: 'dist/index.js',
    name: 'index',
    format: 'umd',
  }
},
{
  input: 'src/utils.js',
  plugins: getPlugins({ uglify: true }),
  output: {
    file: 'dist/utils.min.js',
    name: 'utils',
    format: 'umd',
  }
}, {
  input: 'src/utils.js',
  plugins: getPlugins(),
  output: {
    file: 'dist/utils.js',
    name: 'utils',
    format: 'umd',
  }
}]
