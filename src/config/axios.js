import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_API;
axios.defaults.timeout = 5000;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["type"] = "lthtest";
axios.interceptors.request.use(config => {
    console.log('请求被拦截')
    return config
},error => {

})

axios.interceptors.response.use(res => {
    console.log('返回被拦截')
    return res.data
},error => {
    return error;
})


export default axios;