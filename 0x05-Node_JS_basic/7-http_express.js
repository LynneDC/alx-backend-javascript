const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students/:database', async (req, res) => {
  const database = req.params.database;
  let students;
  try {
    students = await countStudents(database);
    res.write(`This is the list of our students\n`);
    res.write(students);
  } catch (error) {
    res.write(`This is the list of our students\n`);
    res.write(`${error.message}\n`);
    res.write(
      await countStudents('database.csv'),
    );
  }

  res.end();
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
