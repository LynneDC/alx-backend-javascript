/**
 * Implement a class name Building
 * construcor takes one argument
 * attribute is stored in _instance
 * implement getter attribute
 * class is an abstract class
 * any class extend from it take on its method
 * if subclass does not have its method:
 * throw error
 */
export default class Building {
	constructor(sqft) {
		this._sqft = sqft;
	}
	//getter method
	get sqft() {
		return this._sqft = sqft;
	}
}
