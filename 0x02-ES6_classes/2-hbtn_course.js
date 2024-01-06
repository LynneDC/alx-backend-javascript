/**
 * new class
 * takes 3 parameters in the constructor
 * params are assigned to private instance
 */
class HolbertonCourse {
  constructor(name, length, students) {
    this.name = '';
    this.length = 0;
    this.students = [];

    /* verify and set params */
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // getter method
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setter methods
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(value) {
    const num = Number(value);
    if (!Number.isNaN(num)) {
      this._length = num;
    } else {
      throw new TypeError('Lengrh must be a number');
    }
  }

  set students(value) {
    if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}

export default HolbertonCourse;
