/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import { URL_API } from '.'

const debugData = (data) => {
  return Promise.resolve(data)
}

const debugError = (er) => {
  if (er.response && er.response.status === 401) {
    // localStorage.clear();
  }
  return Promise.reject(er.response)
}

const Api = () => {
  // const token = localStorage.getItem("sessionToken");

  const axiosApi = axios.create({
    baseURL: URL_API,
    headers: {
      // Authorization: `Bearer ${token}`,
      // Accept: `application/vnd.closedwon.v1`,
      // 'Access-Control-Allow-Origin': '*',
    },
    paramsSerializer(params) {
      let urlParameters = ''
      Object.keys(params).forEach((keys) => {
        if (typeof params[keys] === 'object') {
          Object.keys(params[keys]).forEach((value1) => {
            if (typeof params[keys][value1] === 'object') {
              Object.keys(params[keys][value1]).forEach((value2) => {
                urlParameters +=
                  `${keys}[${value1}]` +
                  `[${value2}]` +
                  `=${
                    typeof params[keys][value1][value2] === 'string' &&
                    params[keys][value1][value2].split(' ').length > 0
                      ? params[keys][value1][value2]
                          .split(' ')
                          .map((e) => e)
                          .join('+')
                      : params[keys][value1][value2].toString()
                  }&`
              })
            } else {
              urlParameters += `${keys}[${value1}]=${params[keys][value1]}&`
            }
          })
        } else if (params[keys] !== undefined) {
          urlParameters += `${keys}=${params[keys]}`
        }
      })
      urlParameters =
        urlParameters.substring(
          urlParameters.length - 2,
          urlParameters.length - 1,
        ) === '&'
          ? urlParameters.substring(0, urlParameters.length - 1)
          : urlParameters
      return urlParameters
    },
  })

  return {
    get(url, params = {}, options = {}) {
      return axiosApi.get(url, { params }).then(debugData).catch(debugError)
    },
    post(url, data, options = {}) {
      return axiosApi.post(url, data).then(debugData).catch(debugError)
    },
    put(url, data, options = {}) {
      return axiosApi.put(url, data).then(debugData).catch(debugError)
    },
    delete(url, params = {}, options = {}) {
      return axiosApi
        .delete(url, { data: params })
        .then(debugData)
        .catch(debugError)
    },
  }
}

export default Api
