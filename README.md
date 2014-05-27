emblem-ember-brunch
==============================

Brunch plugin to use the emblem npm module for compiling emblem templates.

This module relies entirly on npm modules. If you include it in your own project, you can freely select which version of the [emblem](https://www.npmjs.org/package/emblem) and [handlebars](https://www.npmjs.org/package/handlebars) to use. The exception being that handlebars 2.0.0 is not supported yet, as that is not the version that is used by ember-template-compile.

This uses the Handlebars resolved from [ember-template-compiler](https://github.com/toranb/ember-template-compiler)

How to install:

    npm install --save emblem-brunch
    
Then, in your config.coffee:

    exports.config =
      templates:
        joinTo: 'app.js'
        precompile: true
        root: 'app/'

Settings:

* **precompile**: Wheter or not templates should be precompiled, default is false. With precompile false, the templates are still compiled from emblem to handlebars.
* **root**: Root path to strip of the template names before exposing to Ember.TEMPLATES. Defaults to "app/"

