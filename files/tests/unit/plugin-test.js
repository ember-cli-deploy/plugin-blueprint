/*eslint-env node*/
'use strict';

const subject = require('../../index');
const assert  = require('../helpers/assert');

describe('<%= sentenceName %> plugin', function() {
  it('has a name', function() {
    let instance = subject.createDeployPlugin({
      name: '<%= shortName %>'
    });

    assert.equal(instance.name, '<%= shortName %>');
  });

  it('implements the correct hooks', function() {
    let plugin = subject.createDeployPlugin({
      name: '<%= shortName %>'
    });

    assert.isDefined(plugin.configure);
    assert.isFunction(plugin.configure);
  });
});
