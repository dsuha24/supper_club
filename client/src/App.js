import React, { Suspense, lazy } from 'react'

import { Switch, Route } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import MainLayout from 'components/layouts/MainLayout'

const HomePage = lazy(() => import('pages/home/HomePage'))
const SignUpPage = lazy(() => import('pages/sign-up/SignUpPage'))
const LoginPage = lazy(() => import('pages/log-in/LoginPage'))

const ChefsPages = lazy(() => import('pages/chefs/ChefsPage'))
const ProfilePages = lazy(() => import('pages/profile/ProfilePage'))
const AddRecipePage = lazy(() => import('pages/add-recipe/AddRecipePage'))
const DetailRecipePage = lazy(() =>
  import('pages/recipe-detail/DetailRecipePage'),
)
const ForgotPasswordPage = lazy(() =>
  import('pages/forgot-password/ForgotPasswordPage'),
)
const ResetPasswordPage = lazy(() =>
  import('pages/reset-password/ResetPasswordPage'),
)

const NotFoundPage = lazy(() => import('pages/static/NotFoundPage'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CssBaseline />
      <MainLayout>
        <Switch>
          <Route exact path="/chefs" component={ChefsPages} />
          <Route exact path="/profile" component={ProfilePages} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/add-recipe" component={AddRecipePage} />
          <Route exact path="/log-in" component={LoginPage} />
          <Route exact path="/recipe/:id" component={DetailRecipePage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <Route path="/reset-password" component={ResetPasswordPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </MainLayout>
    </Suspense>
  )
}

export default App
