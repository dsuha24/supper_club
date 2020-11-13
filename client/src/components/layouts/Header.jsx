/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import useAuth from '../../modules/auth/hooks/useAuth'
import { Link } from 'react-router-dom'

export default function Header() {
  const { isLogged, user, logOut } = useAuth()
  return (
    <div className="Header bg-header">
      <div className="live-icon">
        <Link to="/">
          <h3>SUPPER</h3>
        </Link>
      </div>
      <div className="guest-links">
        <>
          <Link to="/add-recipe">Add Receipe</Link>
          <Link to="/chefs">Chefs</Link>
          {isLogged ? (
            <>
              <Link to="/profile">{user.username}</Link>
              <Link to="#" onClick={logOut}>
                Log out
              </Link>
            </>
          ) : (
            <>
              <Link to="/log-in">Login</Link>
              <Link to="/sign-up">Sign up</Link>
            </>
          )}
        </>
      </div>
    </div>
  )
}
