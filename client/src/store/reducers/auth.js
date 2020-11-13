import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_REGISTER_ERROR,
  AUTH_REGISTER_SUCCESS,
  AUTH_FORGOT_PASSWORD_ERROR,
  AUTH_FORGOT_PASSWORD_SUCCESS,
  AUTH_RESET_PASSWORD_ERROR,
  AUTH_RESET_PASSWORD_SUCCESS,
} from '../actions/actionTypes'

const initData = {
  isLogin: false,
  user: null,
  jwt: null,
  isValidEmail: false,
  isRegister: false,
  errors: null,
  registration: null,
  isSentMail: false,
  isResetPW: false,
  roleContributorId: null,
}

export default function auth(state = initData, action) {
  switch (action.type) {
    case AUTH_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isResetPW: true,
      }
    case AUTH_RESET_PASSWORD_ERROR:
      return {
        ...state,
        isResetPW: false,
        errors: action.errors,
      }
    case AUTH_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isSentMail: true,
      }
    case AUTH_FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        isSentMail: false,
        errors: action.errors,
      }
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        user: action.data.user,
        jwt: action.data.jwt,
      }
    case AUTH_LOGIN_ERROR:
      return {
        ...state,
        isLogin: false,
        user: null,
        errors: action.errors,
      }
    case AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: true,
      }
    case AUTH_REGISTER_ERROR:
      return {
        ...state,
        errors: action.errors,
      }
    default:
      return {
        ...state,
      }
  }
}
