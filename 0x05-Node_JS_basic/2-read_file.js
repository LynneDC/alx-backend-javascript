const fs = require('fs');

function countStudents(path) {
  let database;
  try {
    database = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const students = database
    .split('\n')
    .filter((student) => student.length > 0)
    .map((student) => student.split(','));

  const nbStudents = students.length;
  console.log(`Number of students: ${nbStudents}`);
  console.log('');

  const fields = ['firstName', 'lastName', 'email', 'studentId', 'school'];
  fields.forEach((field) => {
    const nbStudentsInField = students.reduce((acc, curr) => {
      if (curr[0] === field) {
        return acc + 1;
      }
      return acc;
    }, 0);
    const listOfFirstNames = students
      .filter((student) => student[0] === field)
      .map((student) => student[1]);
    console.log(`Number of students in ${field}: ${nbStudentsInField}`);
    console.log(`  List: ${listOfFirstNames.join(', ')}`);
  });
}
