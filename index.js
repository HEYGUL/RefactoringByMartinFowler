const plays = require('./plays.json');
const invoice = require('./invoices.json')[0];
const { statement, htmlStatement } = require('./statement.js');

const result = statement(invoice, plays);
console.log(result);

const htmlResult = htmlStatement(invoice, plays);
console.log(htmlResult);
