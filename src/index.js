var umd = require("umd-wrapper")
var Emblem = require("emblem")
Emblem.handlebarsVariant = require("ember-template-compiler").EmberHandlebars;


function EmberTemplateCompilerBrunch(config) {

    if (config.files.templates.precompile === true) {
        this.precompile = true;
    }
    if (config.files.templates.root != null) {
        this.root = config.files.templates.root;
    }
}

EmberTemplateCompilerBrunch.prototype.brunchPlugin = true;
EmberTemplateCompilerBrunch.prototype.type = 'template';
EmberTemplateCompilerBrunch.prototype.extension = 'Emblem';
EmberTemplateCompilerBrunch.prototype.precompile = false;
EmberTemplateCompilerBrunch.prototype.root = "app/";

EmberTemplateCompilerBrunch.prototype.compile = function (data, path, callback) {
    try {
        var template;
        if (this.precompile === true) {
            var content = Emblem.precompile(Emblem.handlebarsVariant, data);
            template = "Ember.Handlebars.template(" + content + ")"
        } else {
            var content = JSON.stringify(Emblem.parse(data));
            template = "Ember.Handlebars.compile(" + content + ")"
        }
        var emberPath = path.replace(this.root, '').replace(/\\/g, '/').replace(/\.[^.]+/,'');

        callback(null, umd("Ember.TEMPLATES['" + emberPath + "'] = " + template));
    } catch (error) {
        console.log(error.stack)
        callback(error);
    }
};

module.exports = EmberTemplateCompilerBrunch;