import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Input, Button } from 'components/core'
import { FormItem } from 'components/core/Form'
import AuthLayout from 'modules/auth/AuthLayout'
import { toast } from 'react-toastify'
import { registerUser } from 'store/actions/auth'

function SignUpForm(props) {
  const { register, handleSubmit, errors, setError } = useForm()

  useEffect(() => {
    if (props.errors && props.errors.username) {
      setError('username', {
        message: props.errors.username.message,
        shouldFocus: true,
      })
    }
    if (props.errors && props.errors.email) {
      setError('email', {
        message: props.errors.email.message,
        shouldFocus: true,
      })
    }
  }, [props.errors])

  const onSubmit = async (data) => {
    if (data.confirm_password !== data.password) {
      return toast.error('Passwords do not match!')
    }
    const Data = {
      username: data.email,
      email: data.email,
      password: data.password,
    }
    return props.registerUser(Data)
  }

  useEffect(() => {
    if (props.isRegister) {
      toast.success('Success. Redirecting to Login...')
      setTimeout(() => {
        props.history.push('/log-in')
      }, 2000)
    }
  }, [props.isRegister])

  useEffect(() => {
    if (props.errors) {
      toast.error(props.errors.message)
    }
  }, [props.errors])

  return (
    <AuthLayout>
      <div className="SignUpForm">
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
            <FormItem hasError={errors.password}>
              <Input
                name="confirm_password"
                type="password"
                placeholder="Confirm Password"
                inputRef={register({ required: true })}
              />
            </FormItem>
            <div className="form-item">
              <Button type="submit" className="login-btn">
                Create Account
              </Button>
            </div>
            <Link to="/log-in">or Login</Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

const mapStateToProps = (store) => {
  return {
    isRegister: store.auth.isRegister,
    registration: store.auth.registration,
    errors: store.auth.errors,
  }
}

const mapDispatchToProps = {
  registerUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
