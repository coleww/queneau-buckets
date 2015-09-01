var tap = require('tap')

var queneau = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(queneau('world'), 'hello world', 'does it')
})
