const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Express em execução e aguardando requisições em http://localhost:${port}`)
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});