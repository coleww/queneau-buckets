queneau-buckets
----------------

A Queneau buckets node modules based on [Leonard Richardson's algorithm](http://www.crummy.com/2011/08/18/0)


```
You've got a body of N texts, T0, T1, ..., TN-1. Each text can be split into some number of chunks, eg. T00, T01, ..., T0M-1.

Split each text into chunks and assign each chunk to one of three buckets. The first chunk from each text goes into the "first" bucket. The last chunk from each text goes into the "last" bucket". All the other chunks go into the "middle" bucket.

Also keep track of how text lengths are distributed: how likely it is that a text consists of one chunk, how likely that it consists of two chunks, and so on.

Now you're ready to assemble. Pick a length for your new text that reflects the length distribution of the existing texts. Then pick a chunk from the "first" bucket. If your target length is greater than 1, pick a chunk from the "last" bucket". If your target length is greater than 2, pick chunks from the "middle" bucket intil you've got enough. Concatenate the chunks first-middle-last, and you've got a Queneau assembly!
```

[![NPM](https://nodei.co/npm/queneau-buckets.png)](https://nodei.co/npm/queneau-buckets/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://secure.travis-ci.org/coleww/queneau-buckets.png)](http://travis-ci.org/coleww/queneau-buckets)

### EXAMPLE

```
  var makeQueneau = require('quenea-buckets')
  var queneauBuckets = makeQueneau()
  var lines = fs.readFileSync('./lines.txt').toString().split('\n')
  queneauBuckets.seed(lines)
  queneauBuckets.fill(5)
  => wow wow wow ok cool! // idk this will vary i guess
```

### API

`seed(lines)`
=> splits each line by white space, then shoves them into the first/middle/last buckets accordingly.

`generate(length)`
=> pulls elements randomly from the buckets until length is met
