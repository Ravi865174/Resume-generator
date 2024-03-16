const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/generate-resume', (req, res) => {
  const userData = req.body;
  res.render('resume', { userData });
});

app.listen(port, () => {
  console.log(`Resume builder app listening at http://localhost:${port}`);
});
