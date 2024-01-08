/**
 * import class currency
 * implement class pricing
 * constructor with 2 params
 * assign param to _instances
 * implement getter and setter method
 * displayFullPrice - Display amount, current name and code
 * convertPrice - Static method that accept 2 number param
 * Return: Product of params
 */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currecy = currency;
  }

  // getter method
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // setter method
  set amount(amount) {
    this._amount = amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  // function method
  displayFullPrice() {
    return `${this._amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()}`;
  }

  // static method
  static covertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
