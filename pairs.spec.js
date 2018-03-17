/**************************
*
* THIS IS A TESTING FILE
*
* DO NOT MODIFY THIS FILE
*
***************************/

import test from 'ava';
import pairs from './pairs';

test('should return an empty array when passed nothing', t => {
  const result = pairs()
	t.deepEqual(result, [], `Expected [] got ${JSON.stringify(result)}`);
});

test('should return an empty array when passed an empty array', t => {
  const result = pairs([])
	t.deepEqual(result, [], `Expected [] got ${JSON.stringify(result)}`);
});

test('should return an array with a single pair of items when passed an array with just two items', t => {
  const names = ['asis', 'hamsa'];
  const result = pairs(names);
	t.is(result.length, 1,
    `Expected pairs(${JSON.stringify(names)}) to return an array with a single pair (array of two), instead got ${JSON.stringify(result)}`);
	t.is(result[0].length, 2,
    `Expected pairs(${JSON.stringify(names)}) to return an array with a single pair (array of two), instead got ${JSON.stringify(result)}`);
	t.true(result[0].includes('asis'),
    `Expected 'asis' to be in ${JSON.stringify(result[0])} for pairs(${JSON.stringify(names)})`);
	t.true(result[0].includes('hamsa'),
    `Expected 'hamsa' to be in ${JSON.stringify(result[0])} for pairs(${JSON.stringify(names)})`);
});

test('should return an array of pairs when passed multiple names', t => {
  const names = ['asis', 'hamsa', 'fawas', 'mishmish'];
  const result = pairs(names);
  t.is(result.length, 2,
    `Expected pairs(${JSON.stringify(names)}) to return an array of length 2, instead got ${JSON.stringify(result)}`);
  t.true(result.every(pair => pair.length == 2),
    `Expected pairs(${JSON.stringify(names)}) to return an array of pairs (arrays of length 2) instead got ${JSON.stringify(result)}`);
});

test('pairs should be randomized', t => {
  let names = ['asis', 'hamsa', 'fawas', 'mishmish'];
  let pairsets = [...Array(10)].map(() => pairs(names.slice(0)));
  t.false(pairsets.every(pairset =>
    JSON.stringify(pairset) === JSON.stringify(pairsets[0])),
    "You're always pairing the same people together!"
  );
});

test('should be able to handle an odd number of names, the last array should contain only one name', t => {
  let names = ['asis', 'hamsa', 'fawas', 'mishmish', 'hussein'];
  let result = pairs(names)
  let last = result.pop()
  t.is(last.length, 1,
    `Expected the last "pair" to be an array with a single name, instead got ${JSON.stringify(result.concat([last]))}`);
});
