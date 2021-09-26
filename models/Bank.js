const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  code: {type: String, required: true, unique: true},
  bankName: {type: String, required: true},
  interestRate: {type: Number, required: true},
  maximumLoan: {type: Number, required: true},
  minimumDownPayment: {type: Number, required: true},
  loanTerm: { type: Number, required: true },
  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Bank', schema)