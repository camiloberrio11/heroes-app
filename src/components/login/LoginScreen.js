import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {

  const { dispatch } = useContext(AuthContext)

  const handleClick = () => {
    // history.push('/marve') // Si le doy el boton de atras muestra el historial
    // history.replace('/')

    const lastPath = localStorage.getItem('lastPath') || '/'

    const action = {
      type: types.login,
      payload: {
        name: 'User1'
      }
    }
    dispatch(action)
    history.replace(lastPath)
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
      onClick={ handleClick }
      className="btn btn-success">Ingresar</button>
    </div>
  )
}
