import {
  moduleForModel,
  test
} from 'ember-qunit'
import DS from 'ember-data'
import Ember from 'ember'

moduleForModel('post', 'Post Model', {
  // Specify the other units that are required for this test.
})

test('it exists', function (assert) {
  let store = this.store()
  let post = this.subject({
    title: 'hello darkness',
    body: '# my old friend\nI\'ve come to talk to you.',
    user_id: 0,
    created_at: (Date.now() - 15 * 60 * 1000),
    updated_at: (Date.now() - 15 * 60 * 1000)
  })
  assert.ok(post)
  assert.ok(post instanceof DS.Model)
})
