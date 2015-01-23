# wrapped-value

A simple helper for generic value wrapping and unwrapping

Wraps a value with a "type" so it can be checked, "unwrapped" 
and processed at the appropriate point in
a transformation chain.

```js
var tableName = wrap('tableName', 'accounts');

wrap.isWrapped(tableName) // true

wrap.getType(tableName)   // 'tableName'

wrap.deref(tableName)     // 'accounts'

wrap.is(tableName, 'tableName') // true
```

### License

MIT