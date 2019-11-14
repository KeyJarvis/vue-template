import axios from '@/plugins/axios'

async function request(opts) {
  let res
  try {
    res = await axios(opts)
    res = res.data
  } catch (err) {
    res = {
      code: '9999',
      message: '请求失败'
    }
  }
  return res
}

export function get(url, data, options = {}) {
  data = data || {}
  data._t = Date.now()
  options.method = 'get'
  options.url = url
  options.params = data
  return request(options)
}

export function post(url, data, options = {}) {
  options.method = 'post'
  options.url = url
  options.data = data
  return request(options)
}

export function put(url, data, options = {}) {
  options.method = 'put'
  options.url = url
  options.data = data
  return request(options)
}

export function del(url, data, options = {}) {
  options.method = 'delete'
  options.url = url
  options.params = data
  return request(options)
}
