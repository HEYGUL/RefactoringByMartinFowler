const {
  describe,
  it,
  expect
} = require('mosic');

describe('statement', () => {
  it('prints statement for first invoice', () => {
    const expected = 'Statement for BigCo\n' +
      '  Hamlet: $650.00 (55 seats)\n' +
      '  As You Like It: $580.00 (35 seats)\n' +
      '  Othello: $500.00 (40 seats)\n' +
      'Amount owed is $1,730.00\n' +
      'You earned 47 credits\n';
    const plays = require('../plays.json');
    const invoice = require('../invoices')[0];
    const statement = require('../statement');

    const actual = statement(invoice, plays);

    expect(actual).to.equal(expected)
  });
});