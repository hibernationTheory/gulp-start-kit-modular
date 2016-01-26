# Gulp Starter Kit

A configurable, modular Gulp starter kit with common tasks. Comes with Browserify and supports Nunjucks templating. ES2015 and Sass ready. Heavily based on:

- [Vigetlabs Gulp Starter](https://github.com/vigetlabs/gulp-starter)
- [Google Web Starter Kit](https://github.com/google/web-starter-kit)
- [Nunjucks Framework](https://github.com/travellingprog/nunjucks-framework)

## How to use it?

Running the command `gulp` will start the development task and will serve the app into a ./tmp folder. BrowserSync should start at this point, launching the app in your browser. Run `gulp build` to output the files for client delivery.

## Tasks

### BrowserSync

- Serves the page to the localhost and launch the browser. Make sure to check out the control panel ui of browsersync. (at localhost:3001 by default)

### Clean

- Clean the production and build folders before copying and/or building current files.

### CSS

- Convert Sass files into CSS. Also include sourcemaps.

### HTML

- Compile Nunjucks templates using the .json data.

### JS

- Browserify and transfrom ES2015 syntax into browser ready mode by babel.

### Static

- A Task to copy files over to the build folder, not currently in use.

### Watch

- Watch files in given tasks for any changes.

## Dependencies

### babelify

https://github.com/babel/babelify
Browserify transform for Babel

Using an earlier version (non-plugin based) since babel6 at the time of this writing seems to have performance issues due to dupe dependencies when multiple plugins are used.
[reddit link describing the issue and solution](https://www.reddit.com/r/javascript/comments/3u7gob/babels_poor_performance_what_im_doing_wrong/cz2z0or)

### browserify

http://browserify.org/
require('modules') in the browser

Browserify will recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single `<script>` tag.

### browser-sync

https://www.browsersync.io/
Time-saving synchronised browser testing.

### del

https://github.com/sindresorhus/del
Delete files and folders

Preferred node module to delete files
https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md

### gulp-autoprefixer

https://github.com/sindresorhus/gulp-autoprefixer
Prefix CSS with Autoprefixer

### gulp-changed 

https://github.com/sindresorhus/gulp-changed
Only pass through changed files

Alternative: gulp-newer
Also related: http://stackoverflow.com/questions/24730215/gulp-newer-vs-gulp-changed

This is to update only the changed files.

### gulp-data

https://github.com/colynb/gulp-data
Generate a data object from a variety of sources: json, front-matter, database, anything... and set it to the file object for other plugins to consume.

### gulp-front-matter

https://github.com/lmtm/gulp-front-matter
Extract front-matter header from files

### gulp-htmlmin

https://github.com/jonschlinkert/gulp-htmlmin
gulp plugin to minify HTML.

### gulp-load-plugins

https://github.com/jackfranklin/gulp-load-plugins
Automatically load in gulp plugins

### gulp-nunjucks-render

https://github.com/carlosl/gulp-nunjucks-render
Render Nunjucks templates

### gulp-rename

https://github.com/hparra/gulp-rename
Rename files easily

### gulp-sass

https://github.com/dlmanning/gulp-sass
Sass plugin for gulp

Might want to consider css-nano (google webstarter kit has it)
`.pipe($.if('*.css', $.cssnano()))`

### gulp-sequence

https://github.com/teambition/gulp-sequence
Run a series of gulp tasks in order

Allows us to serialize or parallelize given gulp tasks.

### gulp-sourcemaps

https://github.com/floridoo/gulp-sourcemaps
Source map support for Gulp.js

### gulp-uglify

https://github.com/terinjokes/gulp-uglify
Minify files with UglifyJS

Required the installation of vinyl-buffer, since the vinyl stream needed to be transformed into a Buffer before getting fed into the uglify. 

### require-dir

https://github.com/aseemk/requireDir
Node.js helper to require() directories.

Allows us to require all the files in a directory without explicitly referring them. Helps us to create a modular gulp configuration, with all plugins in their own files.

### require-glob

https://www.npmjs.com/package/require-glob
Requires multiple modules using glob patterns. Supports exclusions.

### vinyl-buffer

https://github.com/hughsk/vinyl-buffer
Convert streaming vinyl files to use buffers

### vinyl-source-stream

https://github.com/hughsk/vinyl-source-stream
Use conventional text streams at the start of your gulp or vinyl pipelines

## TO-DO
- Add gulp newer or changed to update tasks that are only updated or are new.
- html prettification
- Copy any other file that needs to be copied over to the build folder that is not already done by current tasks. (like images)
- Image minification
- Linting
