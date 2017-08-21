let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.combine([
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/toastr/build/toastr.css'
],'public/css/plugin.css');

mix.combine([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/toastr/build/toastr.min.js'
],'public/js/plugin.js');

mix.combine([
    'node_modules/toastr/build/toastr.min.js'
],'public/js/toastr.js');

mix.combine([
    'node_modules/axios/dist/axios.js'
],'public/js/axios.js');