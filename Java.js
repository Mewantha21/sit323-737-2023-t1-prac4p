const express = require('express');
const res = require("express/lib/response")
const app = express();

app.use(express.json());

app.get('/add', (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Invalid: num1 and num2 have to be numbers.');
  }

  const result = num1 + num2;

  res.json({ result });
});

app.get('/subtract', (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Invalid: num1 and num2 have to be numbers.');
  }

  const result = num1 - num2;

  res.json({ result });
});

app.get('/multiply', (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Invalid: num1 and num2 have to be numbers.');
  }

  const result = num1 * num2;

  res.json({ result });
});

app.get('/divide', (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Invalid: num1 and num2 have to be numbers.');
  }

  if (num2 === 0) {
    return res.status(400).send('Invalid: num2 cannot be NULL.');
  }

  const result = num1 / num2;

  res.json({ result });
});

app.listen(3040, () => {
  console.log('listening to port: 3040');
});
