import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'

import { Input, Button } from 'components/core'
import { FormItem } from 'components/core/Form'

import AuthLayout from 'modules/auth/AuthLayout'
import ForgotPasswordSent from './ForgotPasswordSent'

// store
import { forgotPassword } from 'store/actions/auth'

const LOADING_STATUS = 1
const SUCCESS_STATUS = 2
const FAIL_STATUS = 3

function ForgotPasswordForm(props) {
  const { register, handleSubmit, errors } = useForm()
  const [status, setStatus] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (props.isSentMail) {
      setStatus(2)
    }
  }, [props.isSentMail])

  useEffect(() => {
    if (props.errors) {
      setError(props.errors.message)
      setStatus(3)
    }
  }, [props.errors])

  const onSubmit = (data) => {
    setStatus(1)

    props.forgotPassword(data.email)
  }

  return (
    <AuthLayout>
      <div className="ForgotPasswordForm">
        <h1>RESET PASSWORD</h1>

        {status === SUCCESS_STATUS ? (
          <div>
            <ForgotPasswordSent />
          </div>
        ) : (
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
        )}
      </div>
    </AuthLayout>
  )
}

const mapStateToProps = (store) => {
  return {
    isSentMail: store.auth.isSentMail,
    errors: store.auth.errors,
  }
}

const mapDispatchToProps = {
  forgotPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm)
