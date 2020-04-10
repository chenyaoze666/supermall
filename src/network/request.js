//终极
import axios from 'axios';
//换框架   导入对应框架

// 为了防止多个实例 需要导出 不是用default
export function request(config){

    //1.创建实例   //换框架时换的东西
    const instance = axios.create({
      baseURL:'http://152.136.185.210:8000/api/h8',
      timeout:5000
    });

    //2.axios的拦截器
    //axios interceptors 全局
    //拦截请求
    instance.interceptors.request.use(config => {
      // console.log(config);
      //做事情
      //1.比如config中的一些信息不符合服务器要求   比如拼接头部header

      //2.比如每次请求发送网络请求时, 都希望在界面中显示一个请求的小图标  这里显示出来  响应的时候隐藏起来

      //3.比如某些网络请求(比如登录(token)), 必须携带一些特殊的信息   拦截没有登录的话跳转到登录


      //返回请求
      return config;
    }, err => {
      console.log(err);
    });

    //拦截响应
    instance.interceptors.response.use(res => {

      //只用返回data就好了
      return res.data;
    }, err => {
      console.log(err);
    });


    //3.发送真正的网络请求
    //把结果和异常回调出去   说明调用的时候需要传入参数
    return instance(config);//直接return   因为本身就是Promise

    //换框架最后return new Promise 吧替换的代码包起来
}