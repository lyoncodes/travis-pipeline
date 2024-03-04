const server = require('fastify')();
const HOST = '127.0.0.1';
const PORT = '4000';
const Recipe = require('./recipe.js');

server.get('/', async (req, res) => {
  return "hello from travis pipeline"
});
server.get('/recipes/:id', async (req, res) => {
  const recipe = new Recipe(req.params.id);
  await recipe.hydrate();
  return recipe;
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});