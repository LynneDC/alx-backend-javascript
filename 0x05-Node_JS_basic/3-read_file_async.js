const fs = require('fs');

function countStudents(path) {
	    return new Promise((resolve, reject) => {
		            fs.readFile(path, 'utf8', (error, data) => {
				                if (error) {
							                reject(new Error('Cannot load the database'));
							            } else {
									                    const lines = data.trim().split('\n');
									                    const students = {};

									                    lines.forEach(line => {
												                        const [firstName, lastName, age, field] = line.split(',');
												                        if (firstName && lastName && age && field) {
																                        if (!students[field]) {
																				                            students[field] = [];
																				                        }
																                        students[field].push(firstName);
																                    }
												                    });

									                    console.log(`Number of students: ${lines.length}`);
									                    for (const field in students) {
												                        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
												                    }

									                    resolve();
									                }
				            });
		        });
}

module.exports = countStudents;

