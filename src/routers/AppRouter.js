import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom"
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivatedRoute } from './PrivatedRoute'
import { AuthContext } from '../auth/AuthContext'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes path="/login" component={LoginScreen} isAuthenticated={user.logged}/>
          <PrivatedRoute path="/" component={DashboardRoutes}  isAuthenticated={user.logged} />
        </Switch>
      </div>
    </Router>
  )
}
