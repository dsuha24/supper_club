import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, Redirect } from 'react-router-dom'

import qs from 'querystring'
import { connect } from 'react-redux'

import { Input, Button } from 'components/core'
import { FormItem } from 'components/core/Form'

import AuthLayout from 'modules/auth/AuthLayout'

// store
import { resetPassword } from 'store/actions/auth'

import { toast } from 'react-toastify'

const LOADING_STATUS = 1
// const SUCCESS_STATUS = 2;
const FAIL_STATUS = 3

function ResetPasswordForm(props) {
  const { register, handleSubmit, errors } = useForm()
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(0)
  const history = useHistory()

  const query = qs.parse(history.location.search.slice(1))

  useEffect(() => {
    if (props.isResetPW) {
      toast.success('Success. Redirecting to Login...')
      setTimeout(() => {
        history.push('/log-in')
      }, 2000)
    }
  }, [props.isResetPW])

  useEffect(() => {
    if (props.errors) {
      setError(props.errors.message)
      setStatus(3)
    }
  }, [props.errors])

  const onSubmit = (data) => {
    if (data.password !== data.passwordConfirmation) {
      setStatus(3)
      setError('Passwords do not match.')
      return
    }

    props.resetPassword(query.token, data.password, data.passwordConfirmation)
  }

  if (!query.token) {
    return <Redirect to="/log-in" />
  }

  return (
    <AuthLayout>
      <div className="ForgotPasswordForm">
        <h1>CHANGE YOUR PASSWORD</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <FormItem hasError={errors.password}>
              <Input
                name="password"
                type="password"
                placeholder="New Password"
                inputRef={register({ required: true })}
              />
            </FormItem>

            <FormItem hasError={errors.passwordConfirmation}>
              <Input
                name="passwordConfirmation"
                type="password"
                placeholder="Confirm"
                inputRef={register({ required: true })}
              />
            </FormItem>
            {status === FAIL_STATUS && <p className="error">{error}</p>}
            <div className="form-item">
              {status === LOADING_STATUS ? (
                <Button disabled>Please wait...</Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

const mapStateToProps = (store) => {
  return {
    isResetPW: store.auth.isResetPW,
    errors: store.auth.errors,
  }
}

const mapDispatchToProps = {
  resetPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm)
