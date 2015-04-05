import {
  moduleForModel,
  test
} from 'ember-qunit'
import DS from 'ember-data'
import Ember from 'ember'

moduleForModel('user', 'User Model', {
  // Specify the other units that are required for this test.
})

test('it exists', function (assert) {
  let user = this.subject({
    full_name: 'Talon',
    email: 'talon@theghostin.me',
    bio: 'a scary ghost'
  })
  assert.ok(user)
  assert.ok(user instanceof DS.Model)
})
