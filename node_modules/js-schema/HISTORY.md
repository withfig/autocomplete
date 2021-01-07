Version history
===============

### 1.0.1 (2014-05-06) ###
 * Add missing concatenated and minified versions

### 1.0.0 (2014-05-03) ###
 * Proper implementation of regexp and quantified properties
 * The library has been stable for a long time now, so it's time to release 1.0. It will also make it possible
   to signal API breakage in the future (using semantic versioning).

### 0.7.2 (2014-12-02) ###
 * Reverting the object pattern fix released in 0.7.1 because of breaking error reporting functionality

### 0.7.1 (2014-11-09) ###
 * A bugfix for OrSchema `errors()` method (thanks to Kuba Wyrobek)
 * Type checking for `Array.of()` that prevents misusages like:
   `Array.of(schema, length)` or `Array.of(schema, minLength, maxLength)` (thanks to Kuba Wyrobek)
 * A bugfix for the object pattern to handle `{ "+.+" : String }` and similar patterns correctly
   (thanks to Alex Ivanov)
 * The `String.of()` extension now has `.` as default instead of `[a-zA-Z0-9]` (thanks to Mikael Berg)

### 0.7.0 (2014-09-01) ###
 * Support for error reporting
 * Addition of .jshintrc file for code style consistency
 * Addition of unit tests

### 0.6.4 (2014-08-11) ###
 * Fixing Bower issues

### 0.6.3 (2014-05-03) ###
 * Bower front-end package manager support

### 0.6.2 (2013-02-03) ###
 * Fixing Windows and Mac compatibility issues (#3, #5)

### 0.6.1 (2012-08-19) ###
 * Minor bugfixes

### 0.6.0 (2012-08-18) ###
 * Support for general purpose referencing (with JSON Schema serialization/deserialization)
 * Property description support
 * Splitting out random generation into a separate library (molnarg/generate.js)
 * Removal of the premature compilation system (optimizations will reappear in a future release)
 * Cleaner codebase
 * Js-schema is now self-contained: it has no dependencies
 * Reduced size: 15kb -> 5kb (minified and gzipped)

### 0.5.0 (2012-06-27) ###
 * Support for self-referencing

### 0.4.1 (2012-06-19) ###
 * Browser support

### 0.4.0 (2012-06-17) ###
 * Regexp object properties
 * Enhanced JSON Schema serialization/deserialization support
 * Deep equality pattern

### 0.3.0 (2012-06-13) ###
 * Optional properties in objects
 * Introduction of schema.generate()

### 0.2.0 (2012-06-04) ###
 * Compilation infrastructure
 * Pattern documentation

### 0.1.1 (2012-05-27) ###
 * Basic patterns are in place.
