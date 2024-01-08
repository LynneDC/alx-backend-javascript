/**
 * import class Building
 * implement child class that extends from building
 * give it 2 params in constructor
 * each attribute must have _param
 * implement getter
 * override evacuation Warning Message method
 * return a string
 */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getter method
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return (`vacuate slowly the ${this.floors} floors`);
  }
}
export default SkyHighBuilding;
