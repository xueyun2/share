const baseURL = 'https://api-hmugo-web.itheima.net/api/public/v1/'
//全局ajax请求配置
$.ajaxSetup({
    //请求拦截器
    beforeSend: function (xhr, settings) {
        settings.url = baseURL + settings.url;
    },
    //响应完成后
    complete: function (xhr, status) {
        console.log(xhr, '完成后回调');
    },
    error: function (error) {
        console.error('请求发生错误：' + error);
    }
});
/**
 * @param {string} url   - 请求地址
 * @param {object} param - 请求参数
 */
const request = {
    post: function (url, param) {
        return new Promise((resolve, reject) => {
            $.post(url, param, (res) => {
                resolve(res)
            }, 'json')
        })
    },
    get: function (url, param) {
        return new Promise((resolve, reject) => {
            $.get(url, param, (res) => {
                resolve(res)
            }, 'json')
        })
    }
}