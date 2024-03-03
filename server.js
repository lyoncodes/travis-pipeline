const server = require('fastify')();
const HOST = '127.0.0.1';
const PORT = '8000';
const recipe = require('./recipe.js');

server.get('/', async (req, res) => {
  return "hello from travis pipeline"
})
server.get('/recipe/:id', async (req, res) => {
  const recipe = new Recipe(req.params.id);
  await recipe.hydrate();
  return recipe;
})

server.listen(PORT, HOST, (err, host) => {
  console.log(`Server Up on ${host}`)
})