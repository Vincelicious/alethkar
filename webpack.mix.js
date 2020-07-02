const mix = require('laravel-mix');

mix.js('src/js/alethkar.js', 'js')
mix.postCss('src/css/alethkar.css', 'css', [
  require('postcss-import'),
  require('postcss-nested'),
  require('tailwindcss'),
  require('autoprefixer'),
])
