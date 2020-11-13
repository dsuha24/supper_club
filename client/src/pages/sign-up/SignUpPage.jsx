import React from 'react'

import { Switch, Route } from 'react-router-dom'

import SignUpForm from 'modules/auth/sign-up/SignUpForm'

export default function SignUpPage(props) {
  return (
    <Switch>
      <Route exact path={`${props.match.path}`} component={SignUpForm} />
    </Switch>
  )
}
