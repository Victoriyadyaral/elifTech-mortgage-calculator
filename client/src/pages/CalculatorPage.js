import { useState, useCallback, useEffect, useContext } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { BanksList } from '../components/BanksList/BanksList'
//import { MonthlyPaymentsTablePage } from '../pages/MonthlyPaymentsTablePage'

export const CalculatorPage = () => {
    const [banks, setBanks] = useState()
    const [oneBank, setOneBank] = useState()
    const [id, setId] = useState()
    const {  request } = useHttp()
    const {token} = useContext(AuthContext)
    const [form, setForm] = useState({
        initialLoan: 1,
        downPayment: 1,
    })

    const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
    }
  
    const fetchBanks = useCallback(async () => {
        try {
            const fetched = await request(`/api/calculator`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log(fetched)
            setBanks(fetched)
        } catch (e) { }
    }, [request, token])

    const getBank = useCallback(async () => {
        try {
            const fetched = await request(`/api/calculator/${id}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log("bank", fetched)
            setOneBank(fetched)
        } catch (e) { }
    }, [id, request, token])

    useEffect(() => {
    getBank()
  }, [getBank])

console.log("oneBank", oneBank)
    useEffect(() => {
    fetchBanks()
    }, [fetchBanks])
console.log("banks", banks)
    return (
        <>
        <div>
            <h1>Calculator Page</h1>
            <form>
                    <div className="input-field">
                    <input
                        placeholder="Enter the initial loan"
                        id="initialLoan"
                        name="initialLoan"    
                        type="text"
                        value={form.initialLoan}
                        onChange={changeHandler}
                    />
                    {/* <label htmlFor="bankName">Bank name</label> */}
                    <input
                        placeholder="Enter the down payment"
                        id="downPayment"
                        name="downPayment"     
                        type="text"
                        value={form.downPayment}
                        onChange={changeHandler}
                    />
                    {/* <label htmlFor="interestRate">Interest rate</label> */}
                    </div>
            </form>
            {banks && (
                <ul>
                    {banks.map((
                        bank
                    ) => {
                        return (
                            <li key={bank.code}>
                                <NavLink
                                    to={{ pathname: `/${bank._id}` }}
                                // className={s.button}
                                    onClick={() => { 
                                        setId(bank._id)
                                        console.log("id", bank._id )
                                    }}
                                >
                                    {bank.bankName}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                ) 
            }
        </div>

      {/* <Route path={`/:${id}`} exact>
                <BanksList banks={[oneBank]}/>
      </Route> */}
   </>

  )
}