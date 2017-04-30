"use strict"
/*
import "../docs/dist/es6-modules/Membrane.js";
*/

if (typeof Membrane != "function") {
  if (typeof require == "function") {
    var { Membrane } = require("../../docs/dist/node/es7-membrane.js");
  }
}

if (typeof Membrane != "function") {
  throw new Error("Unable to run tests");
}

describe("Public API is correctly constrained for ", function() {
  function equalArrays(expected, actual) {
    expect(actual.length).toBe(expected.length);
    let ok = (actual.length == expected.length);
    if (!ok)
      return;
    expected.sort();
    actual.sort();
    actual.forEach(function(name, index) {
      if (!ok)
        return;
      let expectedName = expected[index];
      expect(name).toBe(expectedName);
      if (name !== actualName)
        ok = false;
    });
  }

  xit("Membrane", function() {
    const expectedKeys = [
      "logger",
      "modifyRules",
      "prototype",
    ];
    let obj = new Membrane();
    let keys = Reflect.ownKeys(obj);
    equalArrays(expectedKeys, keys);
  });
});
