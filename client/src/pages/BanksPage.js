import { useState, useCallback, useContext, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Link} from 'react-router-dom'
import { Loader } from '../components/Loader/Loader'
import { Button } from '../components/Button/Button'
import { BanksList } from '../components/BanksList/BanksList'

export const BanksPage = () => {
    const [banks, setBanks] = useState({})
    const { loading, request } = useHttp()
    const {token} = useContext(AuthContext)
    
    const [showAddBtn, setShowAddBtn] = useState(true);
    console.log(showAddBtn)
    const toggleBtn = () => {
        setShowAddBtn(!showAddBtn);
    };

    const fetchBanks = useCallback(async () => {
        try {
            const fetched = await request(`/api/bank`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log(fetched)
            setBanks(fetched)
        } catch (e) { }
    }, [request, token])

    useEffect(() => {
    fetchBanks()
    }, [fetchBanks])
    
    if (loading) {
    return <Loader/>
  }
        
  
     return (
         <>
             <h1>User banks</h1>
             {!loading && <BanksList banks={banks} />}
        {showAddBtn && (
                 <Link to={{ pathname: "/create" }}>
                     <Button onClose={toggleBtn} />
                </Link>
             )}
         {!showAddBtn && (
          <Button onClose={toggleBtn}/>
         )}    
     </>
  )
}