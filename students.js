let students = ['Michael', 'Dusty', 'George', 'Vada'];

function addStudent(name) {
  students.push(name);
}

module.exports = {
  students: students,
  instructor: 'Edan',
  addStudent: addStudent,
};
