import Ember from "ember"
import { module, test } from 'qunit'
import startApp from '../helpers/start-app'
var App

module('Index - Integration', {
  beforeEach: function() {
    App = startApp()
  },
  afterEach: function() {
    Ember.run(App, App.destroy)
  }
})

test("Page contents", function(assert) {
  assert.expect(1)
  visit('/').then(function() {
    assert.equal(find('<h1>').length, 1, "Page contains a title")
  })
  // TODO: Write better integration tests.
})
