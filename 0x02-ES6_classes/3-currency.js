export default class Currency {
  constructor(code, name) {
    // name (String)
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;

    // length (Number)
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = code;
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

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
