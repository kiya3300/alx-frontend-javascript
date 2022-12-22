export default class HolbertonCourse {
  constructor(name, length, students) {
    // name (String)
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;

    // length (Number)
    if (typeof length !== 'number') {
      throw new Error('length must be a number');
    }
    this._length = length;

    // students (array of Strings)
    if (typeof students !== 'object') {
      throw new Error('students must be an array');
    }

    this._students = students;
  }

  // Implement a getter and setter for each attribute.
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new Error('length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (typeof students !== 'object') {
      throw new Error('students must be an array');
    }
    this._students = students;
  }
}
