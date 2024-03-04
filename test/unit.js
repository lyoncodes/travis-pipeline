const test = require('tape');
const Recipe = require('../recipe.js');

test('Recipe#hydrate()', async (t) => {
  const r = new Recipe(42);
  await r.hydrate();
  t.equal(r.name, 'Recipe 42', 'name equality');
});

test('Recipe#serialize()', async (t) => {
  const r = new Recipe(72);
  t.deepLooseEqual(r, { id: 72, name: null }, 'serializes properly');
  t.end();
});