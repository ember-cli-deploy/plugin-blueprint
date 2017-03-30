/*eslint-env node*/
'use strict';

const subject = require('../../index');
const assert  = require('../helpers/assert');

describe('<%= sentenceName %> | configure hook', function() {
  let mockUi;

  beforeEach(function() {
    mockUi = {
      verbose: true,
      messages: [],
      write: function() { },
      writeLine: function(message) {
        this.messages.push(message);
      }
    };
  });

  describe('required config', function() {
    it('warns about missing config props', function() {
      let instance = subject.createDeployPlugin({
        name: '<%= shortName %>'
      });

      let context = {
        ui: mockUi,
        config: {
          '<%= shortName %>': {}
        }
      };

      instance.beforeHook(context);

      assert.throws(function(){
        instance.configure(context);
      });

      let s = 'Missing required config: \`isInNeedOfSleep\`';
      assert.match(mockUi.messages.pop(), new RegExp(s));
    });
  });

  describe('default config', function() {
    let config;

    beforeEach(function() {
      config = {
        isInNeedOfSleep: true,
        meaningOfLife: 99
      };
    });

    it('provides default meaning of life', function() {
      let instance = subject.createDeployPlugin({
        name: '<%= shortName %>'
      });

      delete config.meaningOfLife;

      let context = {
        ui: mockUi,
        config: {
          '<%= shortName %>': config
        }
      };

      instance.beforeHook(context);
      instance.configure(context);

      assert.equal(instance.readConfig('meaningOfLife'), 42);
    });
  });
});
