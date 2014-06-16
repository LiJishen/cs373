/*jslint white: true*/
/*global println*/

// --------
// Types.js
// --------

function assert (b) {
	"use strict";
    if (!b) {
        throw "Assertion Error";}}

println("Types.js");

assert(Object   instanceof Object);
assert(Function instanceof Function);

assert(Object   instanceof Function);
assert(Function instanceof Object);

assert(Object.getPrototypeOf(Function.prototype) === Object.prototype);
assert(Object.getPrototypeOf(Object.prototype)   === null);

var b = false;
b = true;
assert((typeof b) === "boolean");
b = new Boolean(false);
assert((typeof b) === "object");
assert(b       instanceof Boolean);
assert(b       instanceof Object);
assert(Boolean instanceof Function);
assert(Boolean instanceof Object);
assert(Object.getPrototypeOf(b)                 === Boolean.prototype);
assert(Object.getPrototypeOf(Boolean.prototype) === Object.prototype);

var n = 2.34;
assert((typeof n) === "number");
n = new Number(2);
assert((typeof n) === "object");
assert(n      instanceof Number);
assert(n      instanceof Object);
assert(Number instanceof Function);
assert(Number instanceof Object);
assert(Object.getPrototypeOf(n)                === Number.prototype);
assert(Object.getPrototypeOf(Number.prototype) === Object.prototype);

var s = "abc";
assert((typeof s) === "string");
s = new String("abc");
assert((typeof s) === "object");
assert(s      instanceof String);
assert(s      instanceof Object);
assert(String instanceof Function);
assert(String instanceof Object);
assert(Object.getPrototypeOf(s)                === String.prototype);
assert(Object.getPrototypeOf(String.prototype) === Object.prototype);

var a = [2, 3, 4];
assert((typeof a) === "object");
assert(a     instanceof Array);
assert(a     instanceof Object);
assert(Array instanceof Function);
assert(Array instanceof Object);
assert(Object.getPrototypeOf(a)               === Array.prototype);
assert(Object.getPrototypeOf(Array.prototype) === Object.prototype);

var x = {n : 2.34, s : "abc", u : {v : [2, 3, 4]}};
assert((typeof x) === "object");
assert(x      instanceof Object);
assert(Object instanceof Function);
assert(Object instanceof Object);
assert(Object.getPrototypeOf(x) === Object.prototype);

var y = Object.create(x);
assert((typeof y) === "object");
assert(y      instanceof Object);
assert(Object instanceof Function);
assert(Object instanceof Object);
assert(Object.getPrototypeOf(y) === x);

function inc (v) {
	"use strict";
    return v + 1;}
assert((typeof inc) === "function");
assert(inc      instanceof Function);
assert(inc      instanceof Object);
assert(Function instanceof Function);
assert(Function instanceof Object);

println("Done.");
