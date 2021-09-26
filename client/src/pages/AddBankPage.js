import { useContext, useState, useCallback, useEffect} from 'react'
//import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader/Loader'
import {BankCard} from  '../components/BankCard/BankCard'

export const AddBankPage = () => {
    const {token} = useContext(AuthContext)
    const { request, loading } = useHttp()
    const history = useHistory()
    const [bank, setBank] = useState({})
    // const [bank, setBank] = useState(null)
    // const bankId = useParams().id
    
    const addBank = useCallback(async () => {
    // try {
    //   const fetched = await request(`/api/bank/${bankId}`, 'GET', null, {
    //     Authorization: `Bearer ${token}`
    //   })
    //     console.log(fetched)
    //   setBank(fetched)
    // } catch (e) {}
      console.log(token, bank)
      if (!bank.bankName) {
        return;
      }

        try {
          
          await request('/api/bank/generate', 'POST', { bank: { ...bank }}, {
            Authorization: `Bearer ${token}`
          })
          history.push('/banks')
        } catch (e) {
          console.log(e)
        }
        console.log('hello2')

  }, [bank, history, request, token])

  useEffect(() => {
    addBank()
  }, [addBank])
    
  const handleSubmit = (newBank) => {
     setBank(newBank)
  }  

  if (loading) {
    return <Loader />
  }

  return (
      <>
      {!loading && <BankCard onSubmit={handleSubmit} onClick={addBank}/> }
    </>
  )
}