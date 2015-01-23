"use strict";

function WrappedValue(type, value) {
  this.type  = type
  this.value = value
}
var IS_WRAPPED = '@@__WRAPPED_VALUE__@@'
WrappedValue.prototype[IS_WRAPPED] = true

function wrap(type, value) {
  if (typeof type !== 'string') {
    throw new Error('The wrapped "type" must be a string')
  }
  return new WrappedValue(type, value)
}

wrap.variadic = function(type) {
  var len  = arguments.length - 1
  var args = new Array(len)
  for (var i = 0; i < len; i++) {
    args[i] = arguments[i + 1]
  }
  return wrap(type, args)
}

wrap.getType = function(obj) {
  return wrap.isWrapped(obj) ? obj.type : void 0;
}

wrap.getValue = function(obj) {
  return wrap.isWrapped(obj) ? obj.value : void 0;
}

wrap.get = function(obj, key, notSetValue) {
  var value = wrap.getValue(obj)
  return value ? value[key] : notSetValue 
}

wrap.deref  = function(value) {
  return wrap.isWrapped(value) ? value.value : value
}
wrap.unwrap = wrap.deref;

wrap.is = function(obj, type) {
  return wrap.getType(obj) === type;
}

wrap.isWrapped = function isWrapped(val) {
  return val && !!val[IS_WRAPPED]
}

wrap.WrappedValue = WrappedValue;

module.exports = wrap;