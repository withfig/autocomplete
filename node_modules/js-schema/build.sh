#!/bin/bash

cd $(dirname $0)

DEBUG="js-schema.debug.js"
MIN="js-schema.min.js"

if [ -f node_modules/browserify/bin/cmd.js ]
then
    BROWSERIFY='node_modules/browserify/bin/cmd.js'
else
    BROWSERIFY=browserify
fi

if [ -f node_modules/uglify-js/bin/uglifyjs ]
then
    UGLIFY='node_modules/uglify-js/bin/uglifyjs'
else
    UGLIFY=uglifyjs
fi


$BROWSERIFY index.js | sed 's|require("/index.js")|window.schema = require("/index.js")|g' > $DEBUG
$UGLIFY $DEBUG >$MIN
