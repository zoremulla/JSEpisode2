import test from 'ava';
import pairs from './pairs';

test('when passed nothing, returns an empty array', t => {
	t.deepEqual(pairs(), []);
});

test('when passed an empty array, returns an empty array', t => {
	t.deepEqual(pairs([]), []);
});

test('when passed an array with two items, returns an array with a single pair of those two items', t => {
	t.is(pairs(['asis', 'hamsa']).length, 1);
	t.is(pairs(['asis', 'hamsa'])[0].length, 2);
	t.true(pairs(['asis', 'hamsa'])[0].includes('asis'));
	t.true(pairs(['asis', 'hamsa'])[0].includes('hamsa'));
});

test('when passed multiple names, returns an array of pairs', t => {
  let names = ['asis', 'hamsa', 'fawas', 'mishmish'];
  // console.log(pairs(names.slice(0)));
  t.is(pairs(names).length, 2);
  t.true(pairs(names).every(pair => pair.length == 2));
});

test('pairs are randomized', t => {
  let names = ['asis', 'hamsa', 'fawas', 'mishmish'];
  let pairsets = [...Array(10)].map(() => pairs(names.slice(0)));
  t.false(pairsets.every(pairset =>
    JSON.stringify(pairset) === JSON.stringify(pairsets[0])),
    "You're always pairing the same people together!"
  );
});

test('can handle an odd number of names, the last "pair" is an array with one name', t => {
  let names = ['asis', 'hamsa', 'fawas', 'mishmish', 'hussein'];
  t.is(pairs(names).pop().length, 1);
});
