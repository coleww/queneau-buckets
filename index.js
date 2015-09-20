var pick = require('pick-random')
module.exports = function () {
  return {
    a: [],
    b: [],
    c: [],
    seed: function (ls) {
      var that = this
      ls.forEach(function (l) {
        var ws = l.split(' ')
        that.a.push(ws.shift())
        that.c.push(ws.pop())
        that.b.push(ws.join(' '))
      })
      return this
    },
    fill: function (length) {
      if (length) {
        var res = [pick(this.a)]
        var mid = pick(this.b)[0]
        var doit = !!mid
        console.log(mid)
        if (mid) mid = mid.split(' ')
        while (res.length < length - 1 && doit) {
          res.push(mid.shift())
          if (!mid.length) {
            mid = pick(this.b)[0]
            doit = !!mid
            if (mid) mid = mid.split(' ')
          }
        }
        if (length > 1) res.push(pick(this.c))
        return res.join(' ')
      }
    }
  }
}
