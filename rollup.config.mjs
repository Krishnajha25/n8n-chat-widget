// rollup.config.mjs
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerExt from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';

// ← add these:
import postcss from 'rollup-plugin-postcss';
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/index.tsx',
  external: ['react', 'react-dom', 'react-dom/client'],
  output: [
    {
      file: 'dist/chat-widget.umd.js',
      format: 'umd',
      name: 'ChatWidget',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-dom/client': 'ReactDOM'
      },
      interop: 'default'
    },
    { file: 'dist/chat-widget.esm.js', format: 'esm' }
  ],
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    peerExt(),
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json', sourceMap: false }),

    // ← configure PostCSS + Tailwind + Autoprefixer
    postcss({
      extract: true,               // emits dist/chat-widget.css
      plugins: [tailwindcss(), autoprefixer()],
    }),
  ]
};
