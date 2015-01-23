var {ok, equal, deepEqual} = require('assert')
var wrap = require('..')

describe('wrapped-value', () => {
  
  it('should wrap a value & check with isWrapped',  () => {
    var wrapped = wrap('some value', 2)
    ok(wrap.isWrapped(wrapped))
  })

  it('should wrap variadic arguments with wrap.variadic',  () => {
    var wrapped = wrap.variadic('some value', 2, 2, 3, 4, 6)
    ok(wrap.isWrapped(wrapped))
    deepEqual(wrap.getValue(wrapped), [2, 2, 3, 4, 6])
  })

  it('should get the type of the wrapped value with wrap.getType', () => {
    ok(wrap.getType(wrap('something', 1)) === 'something')
  })

});