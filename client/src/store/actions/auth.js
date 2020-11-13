import API from '../config/api'
import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_ERROR,
  AUTH_REGISTER_SUCCESS,
  AUTH_FORGOT_PASSWORD_ERROR,
  AUTH_FORGOT_PASSWORD_SUCCESS,
  AUTH_RESET_PASSWORD_ERROR,
  AUTH_RESET_PASSWORD_SUCCESS,
} from './actionTypes'

export const login = (data) => {
  return (dispatch) => {
    return API()
      .post('auth/local', {
        identifier: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.data.jwt) {
          localStorage.setItem('token', res.data.jwt)
          localStorage.setItem('user', JSON.stringify(res.data.user))
        }
        dispatch({
          type: AUTH_LOGIN_SUCCESS,
          data: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: AUTH_LOGIN_ERROR,
          errors: err.data.data,
        })
      })
  }
}

export const registerUser = (data) => {
  return (dispatch) => {
    return API()
      .post('auth/local/register', data)
      .then((res) => {
        dispatch({
          type: AUTH_REGISTER_SUCCESS,
          data: res.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: AUTH_REGISTER_ERROR,
          errors: err.data,
        })
      })
  }
}

export const forgotPassword = (email) => {
  return (dispatch) => {
    return API()
      .post('auth/forgot-password', { email })
      .then((res) => {
        dispatch({
          type: AUTH_FORGOT_PASSWORD_SUCCESS,
          data: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: AUTH_FORGOT_PASSWORD_ERROR,
          errors: err.data,
        })
      })
  }
}

export const resetPassword = (code, password, passwordConfirmation) => {
  return (dispatch) => {
    return API()
      .post('auth/reset-password', { code, password, passwordConfirmation })
      .then((res) => {
        dispatch({
          type: AUTH_RESET_PASSWORD_SUCCESS,
          data: res.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: AUTH_RESET_PASSWORD_ERROR,
          errors: err.data,
        })
      })
  }
}

export default {
  login,
  registerUser,
  forgotPassword,
  resetPassword,
}
