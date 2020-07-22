import axios from 'axios'

// ==========================================================
// ============= axios封装 公共配置和拦截器 ===================
// ==========================================================


export function request(config) {

  const instance = axios.create({
    baseURL: 'https://free-api.heweather.net/s6/weather',
    timeout: 5000
  })

  instance.interceptors.request.use(
    config => {
      console.log("次请求");
      config.params.key = '836a1476f2ec4e6895b2c4087e6c1bab';
      return config
    }),
    err => { console.log(err) }

  return instance(config);
}


// ==== 和风天气 API Ver.7 (城市信息搜索)====
export function citylookup(config) {
  const instance = axios.create({
    baseURL: 'https://geoapi.heweather.net/v2/city/lookup',
    timeout: 5000
  })
  instance.interceptors.request.use(
    config => {
      config.params.mode = 'fuzzy';
      config.params.range = 'cn';
      config.params.key = '836a1476f2ec4e6895b2c4087e6c1bab';
      return config
    }),
    err => { console.log(err) }
  return instance(config);
}



// ==========================================================
// ========================= api请求 ========================
// ==========================================================



// now 实时天气数据
export function getNowData(pos) {
  return request({
    url: '/now',
    params: {
      location: pos
    }
  })
}

// forecast 7日未来天气预报
export function get7DaysData(pos) {
  return request({
    url: '/forecast',
    params: {
      location: pos
    }
  })
}

// lifestyle 生活指数
export function getLifestyle(pos) {
  return request({
    url: '/lifestyle',
    params: {
      location: pos
    }
  })
}



//lookup Ver.7 城市信息搜索
export function getCitylist(pos) {
  return citylookup({
    params: {
      location: pos,
    }
  })
}
