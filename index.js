const chai = require("chai");
const spies = require("chai-spies-next");
chai.use(spies);
const expect = chai.expect;

// Implement the myEach function
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

// Implement the myMap function
function myMap(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
  } else {
    for (let key in collection) {
      result.push(callback(collection[key]));
    }
  }
  return result;
}

// Implement the myReduce function
function myReduce(collection, callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (initialValue === undefined) {
    if (Array.isArray(collection)) {
      accumulator = collection[0];
      startIndex = 1;
    } else {
      const keys = Object.keys(collection);
      accumulator = collection[keys[0]];
      startIndex = 1;
    }
  }

  if (Array.isArray(collection)) {
    for (let i = startIndex; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], collection);
    }
  } else {
    for (let key in collection) {
      accumulator = callback(accumulator, collection[key], collection);
    }
  }

  return accumulator;
}

// Implement the myFind function
function myFind(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        return collection[i];
      }
    }
  } else {
    for (let key in collection) {
      if (callback(collection[key])) {
        return collection[key];
      }
    }
  }
  return undefined;
}

// Implement the myFilter function
function myFilter(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        result.push(collection[i]);
      }
    }
  } else {
    for (let key in collection) {
      if (callback(collection[key])) {
        result.push(collection[key]);
      }
    }
  }
  return result;
}

// Implement the mySize function
function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

// Implement the myFirst function
function myFirst(collection, n = 1) {
  if (n === 1) {
    return collection[0];
  } else {
    return collection.slice(0, n);
  }
}

// Implement the myLast function
function myLast(collection, n = 1) {
  if (n === 1) {
    return collection[collection.length - 1];
  } else {
    return collection.slice(-n);
  }
}

// Implement the myKeys function
function myKeys(obj) {
  return Object.keys(obj);
}

// Implement the myValues function
function myValues(obj) {
  return Object.values(obj);
}
