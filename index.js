'use strict';

module.exports = {
  description: 'Ember CLI blueprint for initializing a new Ember CLI Deploy plugin',

  locals(options) {
    let name = options.entity.name;
    let shortName = name.slice('ember-cli-deploy-'.length);
    let sentenceName = shortName.split('-')
      .map(part => part.charAt(0).toUpperCase() + part.substr(1).toLowerCase())
      .join(' ');

    return { name, shortName, sentenceName };
  }
};
