var tap = require('tap')

var makeQueneau = require('./')

tap.test('does the thing', function (t) {
  t.plan(3)

  var queneau = makeQueneau()
  queneau.seed(['i am cole', 'i am a flying astronaut cole'])
  t.equal(queneau.fill(1), 'i', 'does it')
  t.equal(queneau.fill(2), 'i cole', 'does it')
  t.equal(queneau.fill(3), 'i am cole', 'does it')
})

tap.test('does the longer thing', function (t) {
  t.plan(2)

  var queneau = makeQueneau()
  queneau.seed(['i am a cole', 'i am a flying astronaut cole'])
  t.equal(queneau.fill(4), 'i am a cole', 'does it')
  t.equal(queneau.fill(5), 'i am a flying cole', 'does it')
})
