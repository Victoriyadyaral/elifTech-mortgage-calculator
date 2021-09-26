import { useState } from 'react';
import PropTypes from 'prop-types';

export const BankCard = ({ onSubmit }) => {

    const [form, setForm] = useState({
        bankName: '',
        interestRate: 1,
        maximumLoan: 1,
        minimumDownPayment: 1,
        loanTerm: 1
    })
  
    const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
    }

     const reset = () => {
        setForm({
        bankName: ' ',
        interestRate: 1,
        maximumLoan: 1,
        minimumDownPayment: 1,
        loanTerm: 1
    });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(form);
        reset();
    }

    return (
        <div>
            <h2>Add new bank</h2>

            <form onSubmit={handleSubmit}>
                    <div className="input-field">
                    <input
                        placeholder="Enter the bank"
                        id="bankName"
                        name="bankName"    
                        type="text"
                        value={form.bankName}
                        onChange={changeHandler}
                    />
                    {/* <label htmlFor="bankName">Bank name</label> */}
                    <input
                        placeholder="Enter the bank"
                        id="interestRate"
                        name="interestRate"     
                        type="text"
                        value={form.interestRate}
                        onChange={changeHandler}
                    />
                    {/* <label htmlFor="interestRate">Interest rate</label> */}
                    <input
                        placeholder="Enter maximum loan"
                        id="maximumLoan"
                        name="maximumLoan"
                        type="text"
                        value={form.maximumLoan}
                        onChange={changeHandler}
                    />
                    {/* <label htmlFor="maximumLoan">Maximum loan</label> */}
                    <input
                        placeholder="Enter minimum down payment"
                        id="minimumDownPayment"
                        name="minimumDownPayment"     
                        type="text"
                        value={form.minimumDownPayment}
                        onChange={changeHandler}
                    />
                    {/* <label htmlFor="minimumDownPayment">Minimum down payment</label> */}
                    <input
                        placeholder="Enter loan term"
                        id="loanTerm"
                        name="loanTerm"
                        type="text"
                        value={form.loanTerm}
                        onChange={changeHandler}
                    />
                    {/* <label htmlFor="loanTerm">Loan term</label> */}
                </div>
              <button type="submit" className="btn">Add</button>
            </form>
</div>
  )
}

BankCard.propTypes = {
    onSubmit: PropTypes.func,
};