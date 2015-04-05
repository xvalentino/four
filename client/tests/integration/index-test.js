/* global visit findWithAssert */

import Ember from 'ember'
import { module, test } from 'qunit'
import startApp from '../helpers/start-app'
var App

module('Index - Integration', {
  beforeEach: function () {
    App = startApp()
  },
  afterEach: function () {
    Ember.run(App, App.destroy)
  }
})

test('Page contents', function (assert) {
  assert.expect(2)
  visit('/').then(function () {
    assert.ok(findWithAssert('.PostsList'))
    assert.ok(findWithAssert('.AuthorsList'))
  })
})
