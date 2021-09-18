import { Switch, Route, Redirect } from 'react-router-dom';
import { BanksPage } from './pages/BanksPage';
import { CalculatorPage } from './pages/CalculatorPage';
//import { MonthlyPaymentsTable } from './pages/MonthlyPaymentsTablePage';
import { DetailsBankPage } from './pages/DetailsBankPage';
import {AuthPage} from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/banks" exact>
          <BanksPage />
        </Route>
        <Route path="/calculator" exact>
          <CalculatorPage />
        </Route>
        <Route path="/banks/:id">
          <DetailsBankPage />
        </Route>
        <Redirect to="/banks" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}