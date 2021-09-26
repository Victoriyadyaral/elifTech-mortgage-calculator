import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa";

export const BanksList = ({ banks}) => {
  if (!banks.length) {
    return <p className="center">No bank has been selected so far</p>
  }

  return (
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Bank</th>
        <th>Interest rate</th>
        <th>Maximum loan</th>
        <th>Minimum down payment</th>
        <th>Loan term</th>
        <th>Delete bank</th>
      </tr>
      </thead>

      <tbody>
        {banks.map(({
          _id,
          bankName,
          interestRate,
          maximumLoan,
          minimumDownPayment,
          loanTerm
        }, index) => {
        return (
          <tr key={_id}>
            <td>{index + 1}</td>
            <td>
              <Link to={`/calculator`}>
                {bankName}
              </Link>
            </td>
            <td>{interestRate}</td>
            <td>{ maximumLoan }</td>
            <td>{minimumDownPayment }</td>
            <td>{loanTerm}</td>
            <td>
              <button
            // className={s.button}
            type="button"
            aria-label="Delete  bank"    
            // onClick={() => onDeleteBank(_id)}
            >
            <FaTrashAlt color="rgb(55, 150, 238)" size="30px"/>
            </button>
            </td>
          </tr>
        )
      }) }
      </tbody>
    </table>
  )
}