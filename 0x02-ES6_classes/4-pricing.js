/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    // name (String)
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }
    this._amount = amount;

    // length (Number)
    if (typeof currency !== 'object') {
      throw new Error('currency must be a object');
    }
    this._currency = currency;
  }

  // Implement a getter and setter for each attribute.
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (typeof currency !== 'object') {
      throw new Error('currency must be a Object');
    }
    this._currency = currency;
  }

  displayFullPrice(Currency) {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new Error('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
