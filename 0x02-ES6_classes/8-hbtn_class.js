/**
 * implent class Holberton
 * constructor hold a number and a string
 * store attribute in _param
 * when cast, number return size
 * and string return location
 */
export default class HolbertonClass {
  constuctor(size, location) {
    this._size = size;
    this._location = location;
  }

  // cust to number
  valuOF() {
    return this._size;
  }

  // cust to string
  toString() {
    return this._location;
  }
}
