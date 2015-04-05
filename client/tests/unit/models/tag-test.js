import {
  moduleForModel,
  test
} from 'ember-qunit'
import DS from 'ember-data'
import Ember from 'ember'

moduleForModel('tag', 'Post Model', {
  // Specify the other units that are required for this test.
})

test('it exists', function (assert) {
  let tag = this.subject({
    name: 'music'
  })
  assert.ok(tag)
  assert.ok(tag instanceof DS.Model)
})
