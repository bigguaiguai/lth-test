import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_API;
axios.defaults.timeout = 5000;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["type"] = "lthtest";
axios.interceptors.request.use(config => {
    const { url } = config;
    if (!url.includes('/login')) {
        config.headers.Authorization = "Bearer " + sessionStorage.getItem('token') || ''
    }
    // console.log('请求被拦截', config)
    return config
}, error => {

})

axios.interceptors.response.use(res => {
    // console.log(res, '返回被拦截')
    if (res.data?.code === 401) {
        sessionStorage.removeItem('token')
        window.location = '/#/login'
    }
    return res.data
}, error => {

})


export default axios;