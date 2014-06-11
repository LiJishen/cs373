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

var b = false;
b = true;
assert((typeof b) === "boolean");
b = new Boolean(false);
assert((typeof b) === "object");
assert(b       instanceof Boolean);
assert(b       instanceof Object);
assert(Boolean instanceof Function);
assert(Boolean instanceof Object);

var i = 2;
assert((typeof i) === "number");
i = new Number(2);
assert((typeof i) === "object");
assert(i      instanceof Number);
assert(i      instanceof Object);
assert(Number instanceof Function);
assert(Number instanceof Object);

var f = 2.3;
assert((typeof f) === "number");
f = new Number(2.3);
assert((typeof f) === "object");
assert(f      instanceof Number);
assert(f      instanceof Object);
assert(Number instanceof Function);
assert(Number instanceof Object);

var s = "abc";
assert((typeof s) === "string");
s = new String("abc");
assert((typeof s) === "object");
assert(s      instanceof String);
assert(s      instanceof Object);
assert(String instanceof Function);
assert(String instanceof Object);

var a = [2, 3, 4];
assert((typeof a) === "object");
assert(a     instanceof Array);
assert(a     instanceof Object);
assert(Array instanceof Function);
assert(Array instanceof Object);

var x = {};
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
