let mix = require('laravel-mix');

mix.sass('src/app.scss', 'css');

mix.sass('src/app.scss', 'css').options({
    processCssUrls: false});
