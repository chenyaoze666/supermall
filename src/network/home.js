import {request} from "./request";

//单独在封装 不同的请求
export function getHomeMultidata(){
  return request({
    url:"home/multidata"
  })
  
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}