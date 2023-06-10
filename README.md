# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @primetee/lotide`

**Require it:**

`const _ = require('@primetee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr, expectedResult)`: Head function returns the first element in the array.
* `tail(arr, expectedResult)`: Tail function returns a new array with the elements of an array less the first element. 
* `middle(arr, expectedResult)`: Middle function returns the middle element if array length is odd or an array of the two middle elements when array length is even.
* `assertArraysEqual(array1, array2)`: Compares two arrays and console logs if they are equal or not.
*`assertEqual(actual, expected)`: Compares two variables and logs an assertion (failed or passed).
*`assertObjectsEqual(actual, expected)`: compares two objectsa and asserts whether they are same or not.
*`countLetters(str)`: counts the number of same letters in a string and return an object with numbers as values and letters as properties.
*`countOnly(allItems, ItemsToCount)`: Return counts for a specific subset of those items.
*`eqArrays(array1, array2)`: Function takes in two arrays and returns true or false, based on a perfect match.
*`eqObjects(Obj1, Obj2)`: Function takes in two objects and returns true or false, based on a perfect match.
*`findKey(OBJ, Callback)`: Function scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*`findKeyByValue(Obj, value)`: Function takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
*`flatten(array)`: Function takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array
*`without(source, itemToRemove)`: Function will return a subset of a given array, removing unwanted elements.
*`letterPosition(sentence)`: Function  will return all the indices (zero-based positions) in the string where each character is found.
*`map(array, callback)`: Function will return a new array based on the results of the callback function.
*`takeUntil(array, callback)`: Function will return a "slice of the array with elements taken from the beginning