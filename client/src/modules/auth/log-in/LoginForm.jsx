import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { useHistory, Link } from 'react-router-dom'
// components
import { Input, Button } from 'components/core'
import { FormItem } from 'components/core/Form'

import AuthLayout from 'modules/auth/AuthLayout'

// actions
import { login } from 'store/actions/auth'

function LoginForm(props) {
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm()
  const [submit, setSubmit] = useState(false)

  const onSubmit = (data) => {
    setSubmit(true)
    props.login(data)
  }

  useEffect(() => {
    if (submit && props.isLogin) {
      toast.success('Login success!')
      history.push('/profile')
      window.location.reload()
    }
  }, [props.isLogin])

  useEffect(() => {
    if (submit && props.error) {
      toast.error('Username or password incorrect!')
    }
  }, [props.error])

  return (
    <AuthLayout>
      <div className="LoginForm">
        <h1>Welcome to Supper Club</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <FormItem hasError={errors.email}>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                inputRef={register({ required: true })}
              />
            </FormItem>
            <FormItem hasError={errors.password}>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                inputRef={register({ required: true })}
              />
            </FormItem>

            <div className="form-item">
              <Button type="submit" className="login-btn">
                Log in
              </Button>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>

            <Link to="/sign-up">or Signup</Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

const mapStateToProps = (store) => {
  console.log({ store })
  return {
    isLogin: store.auth.isLogin,
    user: store.auth.user,
    jwt: store.auth.jwt,
    error: store.auth.errors,
  }
}

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
