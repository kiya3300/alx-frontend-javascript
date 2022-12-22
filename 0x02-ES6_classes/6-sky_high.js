import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // name (String)
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    super(sqft);

    // floors (Number)
    if (typeof floors !== 'number') {
      throw new Error('floors must be a floors ');
    }
    this._floors = floors;
  }

  // Implement a getter and setter for each attribute.
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
